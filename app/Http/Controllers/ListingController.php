<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Posts;
use App\Categories;

class ListingController extends Controller
{
    //
    public function ChooseCategory(){
        $categories = DB::table('categories')->where('sub_id', null)->orderBy('sort','ASC')->get();
        return view('posts.ad1', compact('categories'));
    }

    public function ChooseSubCategory($category_id){
        $subcategoriesALL = DB::table('categories')->where('sub_id', '!=', null)->get();
        $subcategories = DB::table('categories')->where('sub_id', $category_id)->get();
        $parents = [];
        $ancestor = Categories::findorfail($category_id);
        if($ancestor->sub_id != null)
            array_push($parents, $ancestor->id);
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents,$ancestor->id);
        }
        $ancestor = $ancestor->id;
        if($subcategories->isEmpty()){
            return $this->ChooseSupplyOrDemand($category_id, $parents, $ancestor, $subcategoriesALL);
        }
        return view('posts.ad2', compact('subcategories', 'subcategoriesALL', 'parents', 'ancestor', 'category_id'));
    }

    public function ChooseSupplyOrDemand($category_id, $parents, $ancestor, $subcategoriesALL){
        return view('posts.ad3', compact('category_id', 'parents', 'ancestor', 'subcategoriesALL'));
    }

    public function ShowNewProduct(Request $request){
        $subcategory_id = $request->input('subcategory_id');
        $SupplyOrDemand = $request->input('SupplyOrDemand');
        return view('posts.newpost', compact('category_id', 'subcategory_id', 'SupplyOrDemand'));
    }

    public function CreateNewPost(Request $request){
        Posts::create([
           'short_des' => $request->input('short_des'),
            'long_des' => $request->input('long_des'),
            'detailed_address' => $request->input('detailed_address'),
            'seller_name' => $request->input('seller_name'),
            'seller_contact_no' => $request->input('seller_contact_no'),
            'price' => $request->input('price'),
            'sub_category_id' => $request->input('subcategory_id'),
            'user_id' => $request->input('user_id'),
        ]);
    }
}
