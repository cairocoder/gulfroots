<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Categories;
use App\Favorites;
use App\Post_Photos;
use App\User;
use App\Posts;
use Cookie;

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

    public function customerservice()
    {
      return view('customerservice');
    }

    public function savedata()
    {
      return view('savedata');
    }

    private static function hashMe()
    {
        $cookie = Cookie::get(env('COUNTER_COOKIE', 'kryptonit3-counter'));
        $visitor = ($cookie !== false) ? $cookie : $_SERVER['REMOTE_ADDR'];
        return hash("SHA256", env('APP_KEY') . $visitor);
    }
}
