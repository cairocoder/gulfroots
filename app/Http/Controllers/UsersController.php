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

    public function ads()
    {
        $user = Auth::user();
        if(!$user){
            return route('login');
        }
        $posts = $user->getPosts()->get();
        $posts->map(function ($post) {
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            return $post;
        });
        $favorites = $user->getFavorites()->get();
        $favorites->map(function ($post){
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            $post['liked'] = 1;
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
