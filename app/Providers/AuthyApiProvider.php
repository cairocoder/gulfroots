<?php

namespace App\Providers;

use Authy\AuthyApi as AuthyApi;
use Illuminate\Support\ServiceProvider;

class AuthyApiProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->singleton(AuthyApi::class, function ($app) {
            $authyKey = config('services.authy')['apiKey'] or die(
                "You must specify your api key for Authy. " .
                "Visit https://dashboard.authy.com/"
            );

            return new AuthyApi($authyKey);
        });
    }
}
