<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Posts;
use App\Filters;
use App\Categories;
use App\Post_Photos;
use App\Favorites;

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
        view()->composer('home', function($view) {
            $latest = Posts::latest()->where('isApproved', 1)->orderBy('id', 'desc')->take(12)->get();
            $user = Auth::user();
            if(!$user){
                $user = new User;
                $user->id = -1;
            }
            $favorites = $user->getFavorites()->get();
            $favorites->map(function ($post) use($user){
                $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
                $post['liked'] = 1;
                return $post;
            });
            $view->with(compact('favorites', 'latest'));
        });
        view()->composer('includes.specialcategories', function($view) {
          $specialcategory = Categories::where('slug', '!=', null)->get();
          $view->with(compact('specialcategory'));
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
}
