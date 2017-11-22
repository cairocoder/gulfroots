<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    //
    public function ShowPost($id){
        $post = Posts::findorfail($id);
        return view('posts.single', compact('post'));
    }
}
