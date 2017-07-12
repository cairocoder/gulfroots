<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
    	$categories = Categories::where('sub_id', null)->orderBy('sort')->get();
    	return View('admin.categories.index', compact('categories'));
    }

    public function edit(Categories $category)
    {
    	return View('admin.categories.edit', compact('category'));
    }
}
