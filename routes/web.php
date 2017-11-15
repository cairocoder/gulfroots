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

Route::get('register', 'Auth\RegisterController@showRegistrationForm');
Route::get('personalregister', 'Auth\RegisterController@showUserRegistrationForm');

Route::get('commercialuserregister', 'Auth\RegisterCommercialController@showRegistrationForm')->name('commercialuserregister');
Route::post('commercialuserregister', 'Auth\RegisterCommercialController@createNewCommercialUser');

Route::get(
    '/user/verify', ['as' => 'user-show-verify', function() {
        return response()->view('auth.verifyUser');
    }]
);

Route::post(
    '/user/verify',
    ['uses' => 'Auth\RegisterCommercialController@verify', 'as' => 'user-verify', ]
);

Route::post(
    '/user/verify/resend',
    ['uses' => 'Auth\RegisterCommercialController@verifyResend',
//        'middleware' => 'auth',
        'as' => 'user-verify-resend']
);


Route::get('admin/login', 'AdminAuthController@login');
Route::post('admin/login', 'AdminAuthController@doLogin');

Route::get('admin/logout', 'AdminAuthController@logout');

Route::post('password/email', 'AdminAuthController@sendResetLinkEmail');
Route::get('password/reset', 'AdminAuthController@showResetForm');

Route::post('password/reset', 'AdminAuthController@showResetForm');


Route::group(['middleware'=>['auth','Role'],'roles' => ['user.*']], function(){
	Route::resource('/posts', 'PostsController',['except' => [
		'show','index',
	]]);
});


Route::group(['prefix'=>'admin','middleware'=>'auth_admin'],function()
{
	Route::get('/', function () {
	    return view('layouts.admin.main');
	});

	Route::resource('site-settings', 'SiteSettingsController');
	Route::resource('admins', 'AdminController');
	
	Route::resource('users', 'UsersController');
	Route::get('users/{user}/messages', 'UsersController@userMessages');
	Route::get('users/{user}/bills', 'UsersController@UserBills');
	Route::post('bills/{id}', 'UsersController@payBill');
	Route::get('users/{user}/subscriptions', 'UsersController@UserSubscriptions');
	Route::get('users/{user}/posts', 'UsersController@UserPosts');

	Route::resource('categories', 'CategoriesController');
	Route::post('categories/sort', 'CategoriesController@sortRows');
	Route::get('categories/{id}/create', 'CategoriesController@create');
	Route::post('categories/{id}', 'CategoriesController@store');

	Route::resource('packages', 'PackagesController');

	Route::resource('filters', 'FiltersController');
	Route::resource('filter-groups', 'FiltersGroupsController');

	Route::get('filters/{user}/create', 'filtersController@create');
	Route::post('filters/{user}', 'filtersController@store');

	Route::get('admins/create', 'AdminController@create');
	Route::post('admins', 'AdminController@store');

	Route::get('packages/create', 'PackagesController@create');
	Route::post('packages', 'PackagesController@store');

	Route::resource('ads', 'AdController');
	Route::get('ads/create','AdController@create');
	Route::post('ads','AdController@store');

	Route::resource('posts', 'PostsController');
	Route::get('posts/create','PostsController@create');
	Route::post('posts','PostsController@store');

	Route::resource('messages', 'MessagesController');
	Route::get('messages/create','MessagesController@create');
	Route::post('messages','MessagesController@store');
	

});

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Auth::routes();
Route::get('/messageconfirmation', 'HomeController@goto')->name('messageconfirmation');
