<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Favorites;
use App\Categories;
use App\User;
use App\CommercialUsers;
use App\Post_Photos;

class PostsController extends Controller
{
    //
    public function ShowPost($id){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $post = Posts::findorfail($id);
        $post->liked = Favorites::where('post_id', $id)->where('user_id', $user->id)->count();
        $seller = User::where('id', $post->user_id)->first();
        $seller->whatsapp_number = "";//CommercialUsers::where('id', $post->user_id)->first()->whatsapp_number;
        $latest = Posts::where('user_id', $post->user_id)->orderBy('created_at', 'desc')->take(3)->get();
        $post_photos = Post_Photos::with('post')->get();
        $latest->map(function ($post) use ($user) {
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            return $post;
        });
        $parents = [];
        $ancestor = Categories::findorfail($post->sub_category_id);
        array_push($parents, $ancestor);
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents, $ancestor);
        }
        $parents = array_reverse($parents);
        return view('posts.single', compact('post', 'post_photos', 'latest', 'seller', 'parents'));
    }
    //
    public function toggleFavorite($id){
        $user = Auth::user();
        if(!$user)
            return 2;
    	$action = Favorites::where('post_id', $id)->where('user_id', $user->id)->get();
    	if(count($action) == 0){
    		Favorites::create([
            'post_id' => $id,
            'user_id'=> $user->id,
            ]);
            return 1;
    	}else{
    		Favorites::where('post_id', $id)->where('user_id', $user->id)->delete();
    		return 0;
    	}
    }
    //
    public function GetPostsByCategory($category_id){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $category = Categories::findorfail($category_id);
        $subcategories = [];
        $subcategoriesALL = Categories::where('sub_id', '!=', null)->get();
        foreach($subcategoriesALL as $subcat){
            $ancestor = $subcat;
            if($ancestor->id == $category_id)
                array_push($subcategories, $subcat);
            while($ancestor->sub_id != null){
                $ancestor = Categories::findorfail($ancestor->sub_id);
                if($ancestor->id == $category_id)
                    array_push($subcategories, $subcat);
            }
        }
        $posts = new \Illuminate\Database\Eloquent\Collection;
        foreach($subcategories as $subcat){
            $posts = $posts->merge(Posts::where('sub_category_id', $subcat->id)->get());
        }
        $posts->map(function ($post) use ($user) {
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            return $post;
        });
        $parents = [];
        $ancestor = Categories::findorfail($category_id);
        array_push($parents, $ancestor);
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents, $ancestor);
        }
        $parents = array_reverse($parents);
        return view('categories.maincategory', compact('posts', 'category', 'parents'));
    }
}
