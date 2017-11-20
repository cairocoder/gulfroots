<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
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
        //
        view()->composer('layouts.user', function($view) {
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
    }
}
