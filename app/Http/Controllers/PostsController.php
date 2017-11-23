<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;
use App\Categories;

class PostsController extends Controller
{
    //
    public function ShowPost($id){
        $post = Posts::findorfail($id);
        $spechialcategory = Categories::where('slug', '!=', null)->get();
        return view('posts.single', compact('post','spechialcategory'));
    }
}
