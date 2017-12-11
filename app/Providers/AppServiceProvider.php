<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Posts;
use App\Filters;
use App\Categories;
use App\Post_Photos;
use App\Favorites;
use App\PostFeatures;
use Cookie;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('layouts.user', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategory = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategory', 'spechialcategory'));
        });
        view()->composer('posts.ad2', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $view->with(compact('categories'));
        });
        view()->composer('posts.ad3', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $view->with(compact('categories'));
        });
        view()->composer('layouts.app', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategory = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategory', 'spechialcategory'));
        });
        view()->composer('layouts.page', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategory = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategory', 'spechialcategory'));
        });
        view()->composer('includes.searchbar', function($view) {
          $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
          $subcategory = Categories::where('sub_id', '!=', null)->get();
          $view->with(compact('categories', 'subcategory'));
        });
        view()->composer('includes.favoriteslider', function($view) {
            $user = Auth::user();
            if(!$user){
                $user = new User;
                $user->id = -1;
            }
            $favorites = $user->getFavorites()->get();
            $favorites->map(function ($post) use($user){
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
            $view->with(compact('favorites'));
          });
        view()->composer('home', function($view) {
            $features = PostFeatures::orderBy(DB::raw('RAND()'))->where('type', 2)->orderBy('id', 'desc')->take(12)->get();
            $latest = collect();
            foreach($features as $feature){
                $latest = $latest->merge($feature->getPost()->get());
            }
            $user = Auth::user();
            if(!$user){
                $user = new User;
                $user->id = -1;
            }
            $latest->map(function ($post) use ($user) {
                $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
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
            $favorites = $user->getFavorites()->get();
            $favorites->map(function ($post) use($user){
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
            $view->with(compact('favorites', 'latest', 'lastseen'));
        });
        view()->composer('includes.specialcategories', function($view) {
          $specialcategory = Categories::where('slug', '!=', null)->get();
          $view->with(compact('specialcategory'));
        });
        view()->composer('includes.lastseenslider', function($view){
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
            $view->with(compact('lastseen'));
        });
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        if ($this->app->environment() == 'local') {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }
    }

    private static function hashMe()
    {
        $cookie = Cookie::get(env('COUNTER_COOKIE', 'kryptonit3-counter'));
        $visitor = ($cookie !== false) ? $cookie : $_SERVER['REMOTE_ADDR'];
        return hash("SHA256", env('APP_KEY') . $visitor);
    }
}
