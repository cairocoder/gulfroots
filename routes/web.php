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
Route::get('/categories/{category}', 'PostsController@GetPostsByCategory');
Route::get('/savedata', 'HomeController@savedata')->name('savedata');
Route::get('/about', 'HomeController@about')->name('about');
Route::get('/contactus', 'HomeController@contactus')->name('contactus');
Route::get('/conditions', 'HomeController@conditions')->name('conditions');
Route::get('/custmoerservice', 'HomeController@custmoerservice')->name('custmoerservice');
Route::get('/privacypolicy', 'HomeController@privacypolicy')->name('privacypolicy');
Route::get('/protectionadvices', 'HomeController@protectionadvices')->name('protectionadvices');
Route::get('/publishingpolicy', 'HomeController@publishingpolicy')->name('publishingpolicy');
Route::get('/profile', 'UsersController@profile')->name('profile');
Route::get('/ads', 'UsersController@ads')->name('ads');
Route::get('/messages', 'MessagesController@index')->name('messages');
Route::get('/allmessages/{id}', 'MessagesController@showAllMessages');
//Route::get('', 'MessagesController@showAllMessages');
Route::post('/messages', 'MessagesController@SendMessage');
Route::get('/savedsearch', 'UsersController@savedsearch')->name('savedsearch');
Route::get('/posts/{id}', 'PostsController@ShowPost');

Route::post('/search', 'SearchController@search');
Route::post('/favorite/posts/{id}', 'PostsController@toggleFavorite');

Route::get('/fb/redirect', 'Auth\SocialAuthController@fbredirect')->name('fbredirect');
Route::get('/gplus/redirect', 'Auth\SocialAuthController@gplusredirect')->name('gplusredirect');
Route::get('/{provider}/callback', 'Auth\SocialAuthController@callback');


Route::get('register', 'Auth\RegisterController@showRegistrationForm');
Route::get('personalregister', 'Auth\RegisterController@showUserRegistrationForm');

Route::get('commercialuserregister', 'Auth\RegisterCommercialController@showRegistrationForm')->name('commercialuserregister');
Route::post('commercialuserregister', 'Auth\RegisterCommercialController@createNewCommercialUser');

Route::get('/user/verify', function () {
    return response()->view('auth.verifyUser');
})->name('user-show-verify');

Route::post('/user/verify','Auth\RegisterCommercialController@verify')->name('user-verify');

Route::get(
    '/user/verify/resend',
    ['uses' => 'Auth\RegisterCommercialController@verifyResend',
//        'middleware' => 'auth',
        'as' => 'user-verify-resend']
);


Route::get('companyregister', 'Auth\RegisterCompanyController@showRegistrationForm')->name('companyregister');
Route::post('companyregister', 'Auth\RegisterCompanyController@createNewCompanyUser');
//
//Route::get(
//    '/user/verify', ['as' => 'user-show-verify', function () {
//        return response()->view('auth.verifyUser');
//    }]
//);
//
//Route::post(
//    '/user/verify',
//    ['uses' => 'Auth\RegisterCompanyController@verify', 'as' => 'user-verify',]
//);
//
//Route::post(
//    '/user/verify/resend',
//    ['uses' => 'Auth\RegisterCompanyController@verifyResend',
////        'middleware' => 'auth',
//        'as' => 'user-verify-resend']
//);


Route::get('admin/login', 'Admin\AdminAuthController@login');
Route::post('admin/login', 'Admin\AdminAuthController@doLogin');

Route::get('admin/logout', 'Admin\AdminAuthController@logout');

Route::post('password/email', 'Admin\AdminAuthController@sendResetLinkEmail');
Route::get('password/reset', 'Admin\AdminAuthController@showResetForm');

Route::post('password/reset', 'Admin\AdminAuthController@showResetForm');


Route::group(['middleware' => ['auth', 'Role'], 'roles' => ['user.*']], function () {
    Route::resource('/posts', 'Admin\PostsController', ['except' => [
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

    Route::get('filters/create', 'Admin\FiltersController@create');
    Route::post('filters/', 'Admin\FiltersController@store');

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
Route::post('newpost', 'ListingController@CreateNewPost');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Auth::routes();
Route::get('/messageconfirmation', 'HomeController@mc')->name('messageconfirmation');
