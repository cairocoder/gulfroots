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
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $id = $this->hashMe();
        $lastseen = collect();
        $visitor = DB::table('kryptonit3_counter_visitor')->where('visitor', $id)->first();
        if($visitor){
          $visits = DB::table('kryptonit3_counter_page_visitor')->where('visitor_id', $visitor->id)->orderBy('created_at', 'desc')->take(12)->get();
          $visitedList = collect();
          foreach($visits as $visit){
            $visitedList = $visitedList->merge(DB::table('kryptonit3_counter_page')->where('id', $visit->page_id)->get());
          }
          
          foreach($visitedList as $visited){
            $postHash = DB::table('posts_dictionaries')->where('hash', $visited->page)->first();
            if(!$postHash)continue;
            $lastseen = $lastseen->merge(Posts::where('id', $postHash->post_id)->get());
          }
          $lastseen->map(function ($post) use ($user) {
            $post['liked'] = DB::table('favorites')->where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] =  DB::table('post__photos')->where('post_id', $post['id'])->first()->photolink;
            $features = $post->getFeatures()->get();
            foreach($features as $feature){
                if($feature->type == 5){
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
                }
            }
            return $post;
          });
        }
        return view('home', compact('lastseen'));
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
