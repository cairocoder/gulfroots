<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use App\PostsDictionary;
use App\PostFeatures;
use App\Favorites;
use App\Categories;
use App\User;
use App\CommercialUsers;
use App\Post_Photos;
use App\Reports;
use App\FiltersGroups;

class PostsController extends Controller
{
    public function ChooseCategory(){
        return view('posts.ad1');
    }

    public function ChooseSubCategory($category_id){
        $subcategoriesALL = Categories::where('parent_id', '!=', null)->get()->toArray();
        $subcategories = Categories::where('parent_id', $category_id)->get()->toArray();
        $parents = [];
        $ancestor = Categories::findorfail($category_id);
        if($ancestor->parent_id != null)
            array_push($parents, $ancestor->id);
        while($ancestor->parent_id != null){
            $ancestor = Categories::findorfail($ancestor->parent_id);
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
        $category_id = $_REQUEST['subcategory_id'];
        $SupplyOrDemand = $_REQUEST['SupplyOrDemand'];
        $filters = $this->getFiltersOfSubCategory($category_id);
        $ancestor = Categories::findorfail($category_id);
        // a real ancestor                 or       add_land        or          add_rent
        while($ancestor->parent_id != null and $ancestor->id != 396 and $ancestor->id != 92)
            $ancestor = Categories::findorfail($ancestor->parent_id);
        // dd($filters);
        return view('posts.newpost', compact( 'category_id', 'SupplyOrDemand', 'filters', 'ancestor'));
    }

    private function getFiltersOfSubCategory($subcategory_id){
        $groupsoffilters = [];
        $ancestor = Categories::findorfail($subcategory_id);
        $filterss = $ancestor->filtersgroups()->get();
        foreach ($filterss as $item) {
            $groupsoffilters[$item['id']] = $item;
        }
        while($ancestor->parent_id != null){
            $ancestor = Categories::findorfail($ancestor->parent_id);
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
        // dd($filters);
        return $filters;
    }

    public function CreateNewPost(Request $request){
        $user = Auth::user();
        if(array_key_exists('price',$_REQUEST) == false)
            $_REQUEST['price'] = 0;
        $post = Posts::create([
            'title' => $_REQUEST['title'],
            'short' => $_REQUEST['short'],
            'description' => implode(' ', $_REQUEST['description']),
            'address' => $_REQUEST['address'],
            'seller_name' => $_REQUEST['seller_name'],
            'seller_email' => $_REQUEST['seller_email'],
            'seller_number' => $_REQUEST['seller_number'],
            'price' => $_REQUEST['price'],
            'category_id' => $_REQUEST['category_id'],
            'user_id' => $user->id,
            'search_sentence' => $_REQUEST['filters'],
        ]);
        $search_sentence = $_REQUEST['filters'];
        $search_sentence['category'] = "";
        foreach($this->getParents($_REQUEST['category_id']) as $cat){
            $search_sentence['category'] .= ' ' . $cat['name_ar'];
        }
        // dd($search_sentence);
        $hash = $this->pageId('posts', $post->id);
        PostsDictionary::create([
            'hash' => $hash,
            'post_id' => $post->id,
        ]);
        $cost = 0;
        foreach ($request->file('img') as $image){
            $getimageName = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'), $getimageName);
            $photo = Post_Photos::create([
               'post_id' => $post->id,
               'photolink' => 'images/'. $getimageName
            ]);
        }
        $search_sentence['نوع الاعلان'] = "";
        //Package
        if($request->input('pack') == 1){
            //isColored Feature
            if($request->input('isColoredDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isColored اعلانات مدفوعه ملونة';
                PostFeatures::create([
                    'type' => 1,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isColored')) ,
                ]);
                $post['isColored'] = 1;
            }
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isinMain اعلانات مدفوعه مميزة';
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
                $post['ininMain'] = 1;
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
                $post['isTop'] = 1;
            }
        }elseif($request->input('pack') == 2){
            // $search_sentence['نوع الاعلان'] .= " اعلانات مدفوعه عادية";
            //isColored Feature
            $search_sentence['نوع الاعلان'] .= ' paid isColored اعلانات مدفوعه ملونة';
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isColored'] = 1;
            //isinMain Feature
            if($request->input('isinMainDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isinMain اعلانات مدفوعه مميزة';
                PostFeatures::create([
                    'type' => 2,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinMain')),
                ]);
                $post['ininMain'] = 1;
            }
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
                $post['isTop'] = 1;
            }
        }elseif($request->input('pack') == 3){
            //isColored Feature
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isColored'] = 1;
            //isinMain Feature
            PostFeatures::create([
                'type' => 2,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isinMain'] = 1;
            //has20photos
            PostFeatures::create([
                'type' => 4,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $search_sentence['نوع الاعلان'] .= ' paid isColored اعلانات مدفوعه ملونة';
            $search_sentence['نوع الاعلان'] .= ' paid isinMain اعلانات مدفوعه مميزة';
            //isinTop Feature
            if($request->input('isinTopDecision') == 1){
                $search_sentence['نوع الاعلان'] .= ' paid isinTop أفضل الاعلانات';
                PostFeatures::create([
                    'type' => 3,
                    'post_id' => $post->id,
                    'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
                ]);
                $post['isTop'] = 1;
            }
        }else{
            //isColored Feature
            PostFeatures::create([
                'type' => 1,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isColored'] = 1;
            //isinMain Feature
            PostFeatures::create([
                'type' => 2,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isinMain'] = 1;
            //isinTop Feature
            PostFeatures::create([
                'type' => 3,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $post['isTop'] = 1;
            //has20photos
            PostFeatures::create([
                'type' => 4,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays(30),
            ]);
            $search_sentence['نوع الاعلان'] .= ' paid isColored اعلانات مدفوعه ملونة';
            $search_sentence['نوع الاعلان'] .= ' paid isinMain اعلانات مدفوعه مميزة';
            $search_sentence['نوع الاعلان'] .= ' paid isinTop أفضل الاعلانات';
        }
        //isUrgent Feature
        if($request->input('isUrgent') == 1){
            $search_sentence['نوع الاعلان'] .= ' isUrgent اعلانات مدفوعه عاجلة';
            PostFeatures::create([
                'type' => 5,
                'post_id' => $post->id,
                'expiry_date' => $post->created_at->addDays($request->input('isinTop')),
            ]);
            $post['isUrgent'] = 1;
        }
        // dd($search_sentence);
        $post->search_sentence = $search_sentence;
        $post->save();
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
    //
    public function ShowPost($id){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $post = Posts::findorfail($id);
        // dd($post);
        $post->liked = Favorites::where('post_id', $id)->where('user_id', $user->id)->count();
        // $tmp = explode(' - ', $post->filters()->where('group_id', 1)->first()->name);
        // dd($post['city']);
        // $post['status'] = ;
        $seller = User::where('id', $post->user_id)->first();
        $seller->whatsapp_number = $post->seller_contact_no;
        $latest = Posts::where('user_id', $post->user_id)->where('isArchived', 0)->where('isApproved', 1)->where('id', '!=', $id)->orderBy('created_at', 'desc')->get();
        $latest = $latest->splice(0, 3);
        $post_photos = Post_Photos::with('post')->where('post_id', $id)->get();
        $latest = $this->getInfoOfPost($latest, $user);
        $alike = Posts::orderBy(DB::raw('RAND()'))->where('id', '!=', $id)->where('isArchived', 0)->where('isApproved', 1)->where('category_id', $post->category_id)->where('id', '!=', $post->id)->get();
        $alike = $alike->splice(0, 3);
        $alike = $this->getInfoOfPost($alike, $user);
        $parents = $this->getParents($post->category_id);
        $post = $post->toArray();
        return view('posts.single', compact('post', 'post_photos', 'latest', 'alike', 'seller', 'parents'));
    }
    //
    public function toggleFavorite($id){
        $user = Auth::user();
        if(!$user)
            return 2;
    	$action = Favorites::where('post_id', $id)->where('user_id', $user->id)->get();
    	if(count($action) == 0){
    		Favorites::create([
            'post_id' => $id,
            'user_id'=> $user->id,
            ]);
            return 1;
    	}else{
    		Favorites::where('post_id', $id)->where('user_id', $user->id)->delete();
    		return 0;
    	}
    }
    //
    public function GetPostsByCategory($category_id){
        $category = Categories::findorfail($category_id);
        $posts = Posts::whereIn('id', $this->getSubCategoriesIds($category_id))->paginate(14);
        $filters = $this->getFiltersOfSubCategory($category_id);;
        $posts = $this->getInfoOfPost($posts);
        $parents = $this->getParents($category_id);
        if($category_id == 1){
            return view('categories.car-cat', compact('posts', 'category', 'parents', 'filters'));
        }
        return view('categories.maincategory', compact('posts', 'category', 'parents', 'filters'));
    }

    private function getSubCategoriesIds($id){
        $category = Categories::findorfail($id);
        $ids = [$id];
        $subcategories = $category->getSubCategories()->get();
        foreach($subcategories as $sub){
            $ids = array_merge($ids, $this->getSubCategoriesIds($sub->id));
        }
        return $ids;
    }

    public function ReportPost(Request $request, $id){
        Reports::create([
            'type'=> $request->input('type'),
            'post_id' => $id,
        ]);
        return route('landing');
    }

    private function getInfoOfPost($posts){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $posts->map(function ($post) use($user) {
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            $features = $post->getFeatures()->get();
            foreach($features as $feature){
                if($feature->type == 1){
                    $post['isColored'] = 1;
                }
                if($feature->type == 2){
                    $post['isinMain'] = 1;
                }
                if($feature->type == 5){
                    $post['isUrgent'] = 1;
                }
            }
            return $post;
        });
        return $posts;
    }

    private function getParents($category_id){
        $parents = [];
        $ancestor = Categories::where('id', $category_id)->get()->map(function ($cat) {
            $cat['subcategories'] = $cat->getSubCategories()->get()->pluck('attributes');
            return $cat;
        })->pluck('attributes')[0];
        array_push($parents, $ancestor);
        while($ancestor['parent_id'] != null){
            $ancestor = Categories::where('id', $ancestor['parent_id'])->get()->map(function ($cat) {
                $cat['subcategories'] = $cat->getSubCategories()->get()->pluck('attributes');
                return $cat;
            })->pluck('attributes')[0];
            array_push($parents, $ancestor);
        }
        $parents = array_reverse($parents);
        return $parents;
    }
}
