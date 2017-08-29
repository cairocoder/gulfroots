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


Route::get('/', function () {
    return view('welcome');
});


Route::get('admin/login', 'AdminAuthController@login');
Route::post('admin/login', 'AdminAuthController@doLogin');

Route::get('admin/logout', 'AdminAuthController@logout');

Route::post('password/email', 'AdminAuthController@sendResetLinkEmail');
Route::get('password/reset', 'AdminAuthController@showResetForm');

Route::post('password/reset', 'AdminAuthController@showResetForm');


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
	

});

//Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
//Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
