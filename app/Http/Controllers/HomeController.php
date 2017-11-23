<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
        $subcategory = Categories::where('sub_id', '!=', null)->get();
        $spechialcategory = Categories::where('slug', '!=', null)->get();
        return view('home')->with(compact('categories','subcategory','spechialcategory'));
    }

    public function mc()
    {
        return view('messageconfirmation');
    }

    public function help()
    {
       $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
       $subcategory = Categories::where('sub_id', '!=', null)->get();
       $spechialcategory = Categories::where('slug', '!=', null)->get();
        return view('help',compact('categories','subcategory','spechialcategory'));
    }

    public function search()
    {
        return view('searchresult');
    }

    public function about()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('about', compact('categories','subcategory','spechialcategory'));
    }

    public function ads()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('posts.ad1', compact('categories','subcategory','spechialcategory'));
    }

    public function contactus()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('contactus', compact('categories','subcategory','spechialcategory'));
    }

    public function privacypolicy()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('privacypolicy', compact('categories','subcategory','spechialcategory'));
    }

    public function conditions()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('conditions', compact('categories','subcategory','spechialcategory'));
    }

    public function protectionadvices()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('protectionadvices', compact('categories','subcategory','spechialcategory'));
    }

    public function publishingpolicy()
    {
//      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
//      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('publishingpolicy', compact('spechialcategory'));
    }

    public function custmoerservice()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('custmoerservice', compact('categories','subcategory','spechialcategory'));
    }

    public function savedata()
    {
      $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
      $subcategory = Categories::where('sub_id', '!=', null)->get();
      $spechialcategory = Categories::where('slug', '!=', null)->get();
      return view('savedata', compact('categories','subcategory','spechialcategory'));
    }
}
