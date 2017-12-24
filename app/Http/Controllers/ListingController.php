<?php

namespace App\Http\Controllers;

use App\FiltersGroups;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Posts;
use Ramsey\Uuid\Uuid;
use App\PostsDictionary;
use App\Categories;
use App\Filters;
use App\Post_Photos;
use App\PostFeatures;

class ListingController extends Controller
{
    //
    public function ChooseCategory(){
        $categories = Categories::where('sub_id', null)->orderBy('sort','ASC')->get()->toArray();
        return view('posts.ad1', compact('categories'));
    }

    public function ChooseSubCategory($category_id){
        $subcategoriesALL = Categories::where('sub_id', '!=', null)->get()->toArray();
        $subcategories = Categories::where('sub_id', $category_id)->get()->toArray();
        $parents = [];
        $ancestor = Categories::findorfail($category_id);
        if($ancestor->sub_id != null)
            array_push($parents, $ancestor->id);
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents, $ancestor->id);
        }
        $ancestor = $ancestor->id;
        if(empty($subcategories)){
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
        $filters = $this->getFiltersOfSubCategory($subcategory_id);
        // dd($filters);
        return view('posts.newpost', compact( 'subcategory_id', 'SupplyOrDemand', 'filters'));
    }

    private function getFiltersOfSubCategory($subcategory_id){
        $groupsoffilters = [];
        $ancestor = Categories::findorfail($subcategory_id);
        $filterss = $ancestor->filtersgroups()->get();
        foreach ($filterss as $item) {
            $groupsoffilters[$item['id']] = $item;
        }
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            $filterss = $ancestor->filtersgroups()->get();
            foreach ($filterss as $item) {
                $groupsoffilters[$item['id']] = $item;
            }
        }
        $filters = [];
        foreach ($groupsoffilters as $key => $group) {
            $var = $group['group_name'];
            $filters[$var] = $group->getFilters()->get()->toArray();
            $filters['type'][$var] = $group->type;  
        }
        return $filters;
    }

    public function CreateNewPost(Request $request, Authenticatable $user){
        // dd($request);
        $search_sentence;
        $post = Posts::create([
            'name' => $request->input('title'),
            'short_des' => $request->input('short_des'),
            'long_des' => $request->input('long_des'),
            'detailed_address' => $request->input('detailed_address'),
            'seller_name' => $request->input('seller_name'),
            'seller_contact_no' => $request->input('seller_contact_no'),
            'price' => $request->input('price'),
            'sub_category_id' => $request->input('subcategory_id'),
            'user_id' => $user->id,
            'isinTop' => $request->input('isinTopDecision'),
            'longitude' => $request->input('my-long'),
            'latitude' => $request->input('my-lat'),
        ]);
        $search_sentence = implode(' ', $request->input('filters'));
        // dd($search_sentence);
        $ancestor = Categories::findorfail($post->sub_category_id);
        $search_sentence .= ' ' . $ancestor->name;
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            $search_sentence .= ' ' . $ancestor->name;
        }
        $hash = $this->pageId('posts', $post->id);
        PostsDictionary::create([
            'hash' => $hash,
            'post_id' => $post->id,
        ]);
        $cost = 0;
        //Package
        if($request->input('pack') == 1){
            //isColored Feature
            if($request->input('isColoredDecision') == 1){
                $search_sentence .= ' paid isColored اعلانات مدفوعه ملونة';
                PostFeatures::create([
                    'type' => 1,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isColored')) ,
                ]);
            }
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                $search_sentence .= ' paid isinMain اعلانات مدفوعه مميزة';
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
            }
        }elseif($request->input('pack') == 2){
            // $search_sentence .= " اعلانات مدفوعه عادية";
            //isColored Feature
            $search_sentence .= ' paid isColored اعلانات مدفوعه ملونة';
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                $search_sentence .= ' paid isinMain اعلانات مدفوعه مميزة';
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
            }
        }elseif($request->input('pack') == 3){
            //isColored Feature
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //isinMain Feature
            PostFeatures::create([
                'type' => 2,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //has20photos
            PostFeatures::create([
                'type' => 4,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $search_sentence .= ' paid isColored اعلانات مدفوعه ملونة';
            $search_sentence .= ' paid isinMain اعلانات مدفوعه مميزة';
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
            }
        }else{
            //isColored Feature
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //isinMain Feature
            PostFeatures::create([
                'type' => 2,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //isinTop Feature
            PostFeatures::create([
                'type' => 3,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //has20photos
            PostFeatures::create([
                'type' => 4,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $search_sentence .= ' paid isColored اعلانات مدفوعه ملونة';
            $search_sentence .= ' paid isinMain اعلانات مدفوعه مميزة';
            $search_sentence .= ' paid isinTop أفضل الاعلانات';
        }
        //isBreaking Feature
        if($request->input('isBreaking') == 1){
            $search_sentence .= ' isBreaking اعلانات مدفوعه عاجلة';
            PostFeatures::create([
                'type' => 5,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
            ]);
        }
        // dd($search_sentence);
        $post->search_sentence = $search_sentence;
        $post->save();
        $post->searchable();
        return redirect('posts/'.$post->id);
    }

    private function pageId($identifier, $id = null)
    {
        $uuid5 = Uuid::uuid5(Uuid::NAMESPACE_DNS, $identifier);
        if ($id) {
            $uuid5 = Uuid::uuid5(Uuid::NAMESPACE_DNS, $identifier . '-' . $id);
        }
        return $uuid5;
    }
}
