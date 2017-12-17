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
        $category = $request->get('cat-id');
        $search_sentence = $request->get('search_query');
        $parents = [];
        $ancestor = Categories::findorfail($category);
        array_push($parents, $ancestor);
        while($ancestor->sub_id != null){
            $search_sentence .= ' ' . $ancestor->name;
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents, $ancestor);
        }
        $posts = Posts::search($search_sentence)->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 0)->get();
        $top = Posts::search($search_sentence.'isinTop')->where('isArchived', 0)->where('isApproved', 1)->get();
        $top = $top->shuffle();
        $top = $top->random(3);
        $posts = $this->getInfoOfPost($posts, $user);
        $top = $this->getInfoOfPost($top, $user);
        $parents = array_reverse($parents);
        return view('searchresult', compact('posts', 'parents', 'top', 'request'));
    }
    
    private function getInfoOfPost($posts, $user){
        $posts->map(function ($post) use($user) {
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
        return $posts;
    }
}
