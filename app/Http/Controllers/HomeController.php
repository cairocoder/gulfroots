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
        return view('home');
    }

    public function mc()
    {
        return view('messageconfirmation');
    }

    public function help()
    {
        return view('help');
    }

    public function search()
    {
        return view('searchresult');
    }

    public function about()
    {
      return view('about');
    }

    public function ads()
    {
      return view('posts.ad1');
    }

    public function contactus()
    {
      return view('contactus');
    }

    public function privacypolicy()
    {
      return view('privacypolicy');
    }

    public function conditions()
    {
      return view('conditions');
    }

    public function protectionadvices()
    {
      return view('protectionadvices');
    }

    public function publishingpolicy()
    {
      return view('publishingpolicy');
    }

    public function custmoerservice()
    {
      return view('custmoerservice');
    }

    public function savedata()
    {
      return view('savedata');
    }
}
