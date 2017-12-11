<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        if($request->get('cat-id') == 0){
            // Using the Laravel Scout syntax to search the products table.
            $posts = Posts::search($request->get('search_query'))->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 0)->get();
            $top = Posts::search($request->get('search_query'))->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 1)->get();
            $top = $top->shuffle();
            $top = $top->random(3);
            // If there are results return them, if none, return the error message.
            $posts->map(function ($post) use ($user) {
                $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                $features = $post->getFeatures()->get();
                foreach($features as $feature){
                    if($feature->type == 1){
                        $post['isColored'] = 1;
                    }
                    if($feature->type == 2){
                        $post['isinMain'] = 1;
                    }
                    if($feature->type == 5){
                        $post['isBreaking'] = 1;
                    }
                }
                return $post;
            });
            $top->map(function ($post) use ($user) {
                $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                $features = $post->getFeatures()->get();
                foreach($features as $feature){
                    if($feature->type == 1){
                        $post['isColored'] = 1;
                    }
                    if($feature->type == 2){
                        $post['isinMain'] = 1;
                    }
                    if($feature->type == 5){
                        $post['isBreaking'] = 1;
                    }
                }
                return $post;
            });
            $parents = [];
            return view('searchresult', compact('posts', 'parents', 'top'));
        }else{
            $category = $request->get('cat-id');
            $ids = $this->buildConditions($category);
            $posts = collect();
            $top = collect();
            foreach($ids as $id){
                $posts = $posts->merge(Posts::search($request->get('search_query'))->where('sub_category_id', $id)->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 0)->get());
                $top = $top->merge(Posts::search($request->get('search_query'))->where('sub_category_id', $id)->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 1)->get());
            }
            $top = $top->shuffle();
            $top = $top->random(3);
            $posts->map(function ($post) {
                $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                $features = $post->getFeatures()->get();
                foreach($features as $feature){
                    if($feature->type == 1){
                        $post['isColored'] = 1;
                    }
                    if($feature->type == 2){
                        $post['isinMain'] = 1;
                    }
                    if($feature->type == 5){
                        $post['isBreaking'] = 1;
                    }
                }
                return $post;
            });
            $top->map(function ($post) {
                $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                $features = $post->getFeatures()->get();
                foreach($features as $feature){
                    if($feature->type == 1){
                        $post['isColored'] = 1;
                    }
                    if($feature->type == 2){
                        $post['isinMain'] = 1;
                    }
                    if($feature->type == 5){
                        $post['isBreaking'] = 1;
                    }
                }
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
            return view('searchresult', compact('posts', 'parents', 'top'));
        }
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
