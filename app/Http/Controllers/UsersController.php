<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Bills;
use App\Posts;
use App\Post_Photos;
use App\Favorites;
use App\Messages;
use App\Conversation;
use App\Categories;
class UsersController extends Controller
{
    public function rules($id)
    {
        return [
            'name'  =>'required',
            'email' =>"required|email|unique:users,email,$id"
        ];

    }

    public function profile(Authenticatable $user)
    {
      if($user->isCommercial())
      {
          $user = array_merge($user->toArray(),$user->getCommerical->toArray());
          $user['isCommercial'] = true;
      }else{
          $user = $user->toArray();
          $user['isCommercial'] =false;
      }
      return view('users.profile', compact('user'));
    }

    public function showPublicProfile($id){
        $user = User::where('id', $id)->first();
        if($user->isCommercial())
        {
            $user = array_merge($user->toArray(),$user->getCommerical->toArray());
            $user['isCommercial'] = true;
        }else{
            $user = $user->toArray();
            $user['isCommercial'] =false;
        }
        // dd($user);
        return view('users.publicprofile', compact('user'));
    }

    public function showPublicPosts($id){
        $user = User::where('id', $id)->first();
        $posts = $user->getPosts()->where('isApproved', 1)->get();
        $visitor = Auth::user();
        if(!$visitor){
            $visitor = new User;
            $visitor->id = -1;
        }
        $posts->map(function ($post) use($visitor){
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $visitor->id)->count();
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
        // dd($posts);
      return view('users.publicads', compact('posts', 'user'));
    }

    public function ads()
    {
        $user = Auth::user();
        if(!$user){
            return route('login');
        }
        $posts = $user->getPosts()->get();
        $posts->map(function ($post) {
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
        $favorites = $user->getFavorites()->get();
        $favorites->map(function ($post){
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            $post['liked'] = 1;
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
      return view('users.ads', compact('posts', 'favorites'));
    }

    public function messages(User $user)
    {
        $user = Auth::user();
        if(!$user){
            return route('login');
        }
      return view('users.messages');
    }

    public function savedsearch(User $user)
    {
        $user = Auth::user();
        if(!$user){
            return route('login');
        }
      return view('users.savedsearch');
    }
}
