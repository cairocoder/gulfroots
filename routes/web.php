<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'HomeController@index')->name('landing');
Route::get('/help', 'HomeController@help')->name('help');
Route::get('/categories/{category}', 'CategoriesController@forntend');
Route::get('/searchresult', 'HomeController@search')->name('searchresult');
Route::get('/about', 'HomeController@about')->name('about');
Route::get('/ad1', 'HomeController@ads')->name('ad1');

Route::get('/redirect', 'Auth\SocialAuthFacebookController@redirect')->name('redirect');
Route::get('/callback', 'Auth\SocialAuthFacebookController@callback');

Route::get('register', 'Auth\RegisterController@showRegistrationForm');
Route::get('personalregister', 'Auth\RegisterController@showUserRegistrationForm');

Route::get('commercialuserregister', 'Auth\RegisterCommercialController@showRegistrationForm')->name('commercialuserregister');
Route::post('commercialuserregister', 'Auth\RegisterCommercialController@createNewCommercialUser');

Route::get('/user/verify', function () {
    return response()->view('auth.verifyUser');
})->name('user-show-verify');

Route::post('/user/verify','Auth\RegisterCommercialController@verify');

Route::post(
    '/user/verify/resend',
    ['uses' => 'Auth\RegisterCommercialController@verifyResend',
//        'middleware' => 'auth',
        'as' => 'user-verify-resend']
);


Route::get('companyregister', 'Auth\RegisterCompanyController@showRegistrationForm')->name('companyregister');
Route::post('companyregister', 'Auth\RegisterCompanyController@createNewCommercialUser');

Route::get(
    '/user/verify', ['as' => 'user-show-verify', function () {
        return response()->view('auth.verifyUser');
    }]
);

Route::post(
    '/user/verify',
    ['uses' => 'Auth\RegisterCompanyController@verify', 'as' => 'user-verify',]
);

Route::post(
    '/user/verify/resend',
    ['uses' => 'Auth\RegisterCompanyController@verifyResend',
//        'middleware' => 'auth',
        'as' => 'user-verify-resend']
);


Route::get('admin/login', 'Admin\AdminAuthController@login');
Route::post('admin/login', 'Admin\AdminAuthController@doLogin');

Route::get('admin/logout', 'Admin\AdminAuthController@logout');

Route::post('password/email', 'Admin\AdminAuthController@sendResetLinkEmail');
Route::get('password/reset', 'Admin\AdminAuthController@showResetForm');

Route::post('password/reset', 'Admin\AdminAuthController@showResetForm');


Route::group(['middleware' => ['auth', 'Role'], 'roles' => ['user.*']], function () {
    Route::resource('/posts', 'PostsController', ['except' => [
        'show', 'index',
    ]]);
});


Route::group(['prefix' => 'admin', 'middleware' => 'auth_admin'], function () {
    Route::get('/', function () {
        return view('layouts.admin.main');
    });

    Route::resource('site-settings', 'Admin\SiteSettingsController');
    Route::resource('admins', 'Admin\AdminController');

    Route::resource('users', 'Admin\UsersController');
    Route::get('users/{user}/messages', 'Admin\UsersController@userMessages');
    Route::get('users/{user}/bills', 'Admin\UsersController@UserBills');
    Route::post('bills/{id}', 'Admin\UsersController@payBill');
    Route::get('users/{user}/subscriptions', 'Admin\UsersController@UserSubscriptions');
    Route::get('users/{user}/posts', 'Admin\UsersController@UserPosts');

    Route::resource('categories', 'Admin\CategoriesController');
    Route::post('categories/sort', 'Admin\CategoriesController@sortRows');
    Route::get('categories/{id}/create', 'Admin\CategoriesController@create');
    Route::post('categories/{id}', 'Admin\CategoriesController@store');

    Route::resource('packages', 'Admin\PackagesController');

    Route::resource('filters', 'Admin\FiltersController');
    Route::resource('filter-groups', 'Admin\FiltersGroupsController');

    Route::get('filters/{user}/create', 'Admin\FiltersController@create');
    Route::post('filters/{user}', 'Admin\FiltersController@store');

    Route::get('admins/create', 'Admin\AdminController@create');
    Route::post('admins', 'Admin\AdminController@store');

    Route::get('packages/create', 'Admin\PackagesController@create');
    Route::post('packages', 'Admin\PackagesController@store');

    Route::resource('ads', 'Admin\AdController');
    Route::get('ads/create', 'Admin\AdController@create');
    Route::post('ads', 'Admin\AdController@store');

    Route::resource('posts', 'Admin\PostsController');
    Route::get('posts/create', 'Admin\PostsController@create');
    Route::post('posts', 'Admin\PostsController@store');

    Route::resource('messages', 'Admin\MessagesController');
    Route::get('messages/create', 'Admin\MessagesController@create');
    Route::post('messages', 'Admin\MessagesController@store');


});

Route::get('newad', 'ListingController@ChooseCategory');
Route::post('newad', 'ListingController@ShowNewProduct');
Route::get('newad/{category}', 'ListingController@ChooseSubCategory');
Route::get('newad/{category}/{Subcategory}', 'ListingController@ChooseSupplyOrDemand');
Route::post('newpost', 'ListingController@CreateNewPost');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Auth::routes();
Route::get('/messageconfirmation', 'HomeController@mc')->name('messageconfirmation');
