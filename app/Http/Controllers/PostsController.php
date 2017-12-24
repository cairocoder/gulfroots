<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Favorites;
use App\Categories;
use App\User;
use App\CommercialUsers;
use App\Post_Photos;
use App\Reports;
use App\FiltersGroups;

class PostsController extends Controller
{
    //
    public function ShowPost($id){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $post = Posts::findorfail($id);
        $post->liked = Favorites::where('post_id', $id)->where('user_id', $user->id)->count();
        // $tmp = explode(' - ', $post->filters()->where('group_id', 1)->first()->name);
        $post['country'] = "السعودية";
        $list = collect([
        'الرّياض',
         'جدة',
          'مكة المُكرمة',
           'المدينة المنورة',
           'الأحساء',
            'الطائف',
             'خميس مشيط',
              'حائل',
               'حفر الباطن',
                'الجبيل',
                 'الخرج',
                  'أبها',
                   'الدّمام',
                    'نجران',
                     'بريدة',
                      'ينبع',
                       'تبوك',
                        'القنفذة',
                         'القطيف',
                          'جازان'
        ]);
        foreach($list as $city){
            if($post->search_sentence.contains($city))
                $post['city'] = $city;
        }
        $list = collect(['جديد', 'مستعمل'
            ]);
            foreach($list as $city){
                if($post->search_sentence.contains($city))
                    $post['status'] = $city;
            }
        // dd($post['city']);
        // $post['status'] = ;
        $seller = User::where('id', $post->user_id)->first();
        $seller->whatsapp_number = $post->seller_contact_no;
        $latest = Posts::where('user_id', $post->user_id)->where('isArchived', 0)->where('isApproved', 1)->where('id', '!=', $id)->orderBy('created_at', 'desc')->get();
        $latest = $latest->splice(0, 3);
        $post_photos = Post_Photos::with('post')->where('post_id', $id)->get();
        $latest = $this->getInfoOfPost($latest, $user);
        $alike = Posts::orderBy(DB::raw('RAND()'))->where('id', '!=', $id)->where('isArchived', 0)->where('isApproved', 1)->where('sub_category_id', $post->sub_category_id)->where('id', '!=', $post->id)->get();
        $alike = $alike->splice(0, 3);
        $alike = $this->getInfoOfPost($alike, $user);
        $parents = $this->getParents($post->sub_category_id);
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
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $category = Categories::findorfail($category_id);
        $posts = Posts::search($category->name)->paginate(14);
        $filters = $this->getFiltersOfSubCategory(1);;
        $posts = $this->getInfoOfPost($posts, $user);
        $parents = $this->getParents($category_id);
        if($category_id == 1){
            return view('categories.car-cat', compact('posts', 'category', 'parents', 'filters'));
        }else
        return view('categories.maincategory', compact('posts', 'category', 'parents', 'filters'));
    }

    public function ReportPost(Request $request, $id){
        Reports::create([
            'type'=> $request->input('type'),
            'post_id' => $id,
        ]);
        return route('landing');
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
            $tmp = FiltersGroups::findorfail($group->id)->first();
            $var = $group['group_name'];
            $filters[$var] = $group->getFilters()->get()->toArray();
            $filters['type'][$var] = $group->type;  
        }
        return $filters;
    }

    private function getInfoOfPost($posts, $user){
        $posts->map(function ($post) use($user) {
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            // $tmp = explode(' - ', $post->filters()->where('group_id', 1)->first()->name);
            $post['country'] = "السعودية";
            $list = collect([
            'الرّياض',
            'جدة',
            'مكة المُكرمة',
            'المدينة المنورة',
            'الأحساء',
                'الطائف',
                'خميس مشيط',
                'حائل',
                'حفر الباطن',
                    'الجبيل',
                    'الخرج',
                    'أبها',
                    'الدّمام',
                        'نجران',
                        'بريدة',
                        'ينبع',
                        'تبوك',
                            'القنفذة',
                            'القطيف',
                            'جازان'
            ]);
            foreach($list as $city){
                if($post->search_sentence.contains($city))
                    $post['city'] = $city;
            }
            $list = collect(['جديد', 'مستعمل'
                ]);
                foreach($list as $city){
                    if($post->search_sentence.contains($city))
                        $post['status'] = $city;
                }
            // dd($post['city']);
            // $post['status'] = ;
            $features = $post->getFeatures()->get();
            foreach($features as $feature){
                if($feature->type == 1){
                    $post['isColored'] = 1;
                }
                if($feature->type == 2){
                    $post['isinMain'] = 1;
                }
                if($feature->type == 5){
                    $post['isBreaking'] = 1;
                }
            }
            return $post;
        });
        return $posts;
    }

    private function getParents($category_id){
        $parents = [];
        $ancestor = Categories::findorfail($category_id);
        array_push($parents, $ancestor);
        while($ancestor->sub_id != null){
            $ancestor = Categories::findorfail($ancestor->sub_id);
            array_push($parents, $ancestor);
        }
        $parents = array_reverse($parents);
        return $parents;
    }
}
