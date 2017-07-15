<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
    	$categories = Categories::where('sub_id', null)->orderBy('sort','DESC')->get();
    	return View('admin.categories.index', compact('categories'));
    }

    public function create($id)
    {
    	return View('admin.categories.create', compact('id'));
    }

    public function store($id,Request $request)
    {
    	$request->merge(['sub_id'=>$id]);
    	Categories::create($request->all());
    	return redirect()->to(Url('admin/categories/'.$id));
    }

    public function edit(Categories $category)
    {
    	return View('admin.categories.edit', compact('category'));
    }

    public function update(Categories $category, Request $request)
    {
    	$category->update($request->all());
    	return redirect()->to(Url('/admin/categories'));
    }

    public function show(Categories $category)
    {
    	return View('admin.categories.show', compact('category'));
    }

    public function sortRows(Request $request)
    {
    	// dd($request->all());
    	foreach ($request->sort as $key=>$value) {
    		$category = Categories::find($key);
    		$category->update(['sort'=>$value]);
    	}
    	return redirect()->back();
    }

    public function destroy(Categories $category)
    {
    	$category->delete();
    	return redirect()->back();
    }
}
