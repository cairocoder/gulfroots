<?php

namespace App\Http\Controllers;

use App\FiltersGroups;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Posts;
use App\Categories;
use App\Post_Photos;
use App\PostFeatures;

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
        $groupsoffilters = [];
        //
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
//        dd($groupsoffilters);
        $filters = [];
        foreach ($groupsoffilters as $key => $group) {
            $tmp = FiltersGroups::findorfail($key)->first();
//            dd($group->first());
            $var = $group['group_name'];
//            dd($var);
            $filters[$var] = $tmp->groupFilters()->get();
//            array_push($filters, $var => $tmp->groupFilters()->get());
        }
//        dd($filters);
        $ancestor = $ancestor->id;
        //
        return view('posts.newpost', compact( 'subcategory_id', 'SupplyOrDemand', 'filters'));
    }

    public function CreateNewPost(Request $request, Authenticatable $user){
        // dd($request);
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
        ]);
        $post->searchable();
        //create filters relations
        foreach ($request->file('img') as $image){
            $getimageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $getimageName);
            $photo = Post_Photos::create([
               'post_id' => $post->id,
               'photolink' => 'images/'. $getimageName
            ]);
        }
        $cost = 0;
        // dd($post->created_at->addDays(10));
        //Package
        if($request->input('pack') == 1){
            //isColored Feature
            if($request->input('isColoredDecision') == 1){
                PostFeatures::create([
                    'type' => 1,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isColored')) ,
                ]);
            }
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
            }
        }elseif($request->input('pack') == 2){
            //isColored Feature
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
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
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
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
        }
        //isBreaking Feature
        if($request->input('isBreaking') == 1){
            PostFeatures::create([
                'type' => 5,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
            ]);
        }

        return redirect('posts/'.$post->id);
    }
}
