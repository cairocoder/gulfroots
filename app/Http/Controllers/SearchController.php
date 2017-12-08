<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Posts;
use App\Categories;
use App\Favorites;
use App\User;
use App\Post_Photos;


class SearchController extends Controller
{
    //
    public function search(Request $request){
        // First we define the error message we are going to show if no keywords
        // existed or if no results found.
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        // dd($user);
        $error = ['error' => 'No results found, please try with different keywords.'];
        // Making sure the user entered a keyword.
        if($request->has('search_query')) {
            if($request->get('cat-id') == 0){
                // Using the Laravel Scout syntax to search the products table.
                $posts = Posts::search($request->get('search_query'))->orderBy('created_at','ASC')->get();
                // If there are results return them, if none, return the error message.
                $posts->map(function ($post) use ($user) {
                    $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                    $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                    return $post;
                });
                $parents = [];
                // dd($posts);
                return view('searchresult', compact('posts', 'parents'));
                // return $posts->count() ? $posts : $error;  
            }else{
                $category = $request->get('cat-id');
                $ids = $this->buildConditions($category);
                $posts = collect();
                foreach($ids as $id){
                    $posts = $posts->merge(Posts::search($request->get('search_query'))->where('sub_category_id', $id)->orderBy('created_at','ASC')->get());
                }
                $posts->map(function ($post) {
                    $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                    $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                    return $post;
                });
                $parents = [];
                $ancestor = Categories::findorfail($request->get('cat-id'));
                array_push($parents, $ancestor);
                while($ancestor->sub_id != null){
                    $ancestor = Categories::findorfail($ancestor->sub_id);
                    array_push($parents, $ancestor);
                }
                $parents = array_reverse($parents);
                // If there are results return them, if none, return the error message.
                // dd($posts);
                return view('searchresult', compact('posts', 'parents'));
                // return $posts->count() ? $posts : $error;  
            }
        }
        // Return the error message if no keywords existed
        return $error;        
    }

    public function buildConditions($category){
        $ids = [];
        $categories = Categories::all();
        foreach($categories as $cat){
            if($cat->id == $category){
                array_push($ids, $cat->id);
            }else{
                $tmp = $cat->sub_id;
                while($tmp != NULL){
                    if($tmp == $category){
                        array_push($ids, $cat->id);
                    }
                    $tmp = Categories::where('id', $tmp)->first()->sub_id;
                }
            }
        }
        return $ids;
    }
}
