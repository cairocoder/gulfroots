<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListingController extends Controller
{
    //
    public function ChooseCategory(){
        return view('posts.ad1');
    }
    public function ChooseSubCategory($category_id){
        return view('posts.ad2', compact('category_id'));
    }

    public function ChooseSupplyOrDemand($category_id, $subcategory_id){
        return view('posts.ad3', compact('category_id', 'subcategory_id'));
    }
    public function ShowNewProduct(Request $request){
        $category_id = $request->input('category_id');
        $subcategory_id = $request->input('subcategory_id');
        $SupplyOrDemand = $request->input('SupplyOrDemand');
        return view('posts.newpost', compact('category_id', 'subcategory_id', 'SupplyOrDemand'));
    }
}
