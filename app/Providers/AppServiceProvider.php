<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Posts;
use App\Filters;
use App\Categories;

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
        view()->composer('posts.ad1', function($view) {

            $subcategory = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategory', 'spechialcategory'));
        });
        view()->composer('posts.ad2', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategories = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategories', 'spechialcategory'));
        });
        view()->composer('posts.ad3', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategories = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategories', 'spechialcategory'));
        });
        view()->composer('layouts.app', function($view) {
            $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get();
            $subcategory = Categories::where('sub_id', '!=', null)->get();
            $spechialcategory = Categories::where('slug', '!=', null)->get();
            $view->with(compact('categories', 'subcategory', 'spechialcategory'));
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
