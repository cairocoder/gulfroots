<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Posts;
use App\Categories;
use App\Favorites;
use App\User;
use App\Post_Photos;
use App\FiltersGroups;


class SearchController extends Controller
{
    //
    public function search(Request $request){
        // dd($request);
        $applied_ret = $request->get('applied_filters');
        $applied_filters = explode(',', $request->get('applied_filters'));
        // dd(explode(' : ', $applied_filters[0])[1]);
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $category = $request->get('cat-id');
        $search_sentence = $request->get('search_query') . ' ' . $request->get('search_city');
        foreach($applied_filters as $applied){
            if($applied)
                $search_sentence .= ' ' . explode(' : ', $applied)[1];
        }
        $parents = [];
        if($category > 0){
            $ancestor = Categories::findorfail($category);
            array_push($parents, $ancestor);
            while($ancestor->sub_id != null){
                $search_sentence .= ' ' . $ancestor->name;
                $ancestor = Categories::findorfail($ancestor->sub_id);
                array_push($parents, $ancestor);
            }
        }
        if(!$request['maxi_price'])
            $request['maxi_price'] = PHP_INT_MAX;
        if(!$request['mini_price'])
            $request['mini_price'] = PHP_INT_MIN;
        // dd($request['maxi_price']);
        // dd($search_sentence);
        $search_sentence = $this->clean($search_sentence);
        // dd($search_sentence);
        $posts = Posts::search($search_sentence)->where('isArchived', 0)->where('isApproved', 1)->paginate(11);
        $top = Posts::search($search_sentence.' isinTop')->where('isArchived', 0)->where('isApproved', 1)->get();
        // dd($top);
        // $posts = $posts->sortBy('price');
        $posts = $this->getInfoOfPost($posts, $user);
        $top = $this->getInfoOfPost($top, $user);
        $top = $this->filterByPrice($top, $request['maxi_price'], $request['mini_price']);
        $posts = $this->filterByPrice($posts, $request['maxi_price'], $request['mini_price']);
        $parents = array_reverse($parents);
        if(count($parents) > 0)$filters = $this->getFiltersOfSubCategory($parents[0]);
        else $filters = [];
        shuffle($top);
        $top = array_slice($top, 0, 3); 
        // dd($top);
        // foreach($top as $key=>$post){
        //     $top[$key] = $post->toArray();
        // }
        // foreach($posts as $key=>$post){
        //     $posts[$key] = $post->toArray();
        // }
        if($request['sort'] > 0){
            $top = $this->sortResults($top, $request['sort']);
            $posts = $this->sortResults($posts, $request['sort']);
        }
        // dd($top);
        return view('searchresult', compact('posts', 'parents', 'top', 'request', 'applied_ret', 'filters'));
    }

    private function sortResults($posts, $sort){
        if($sort == 1){
            //sort by last created 
            $posts = array_values(array_sort($posts, function ($value) {
                return $value['created_at'];
            }));
        }else if($sort == 2){
            // sort by least price
            $posts = array_values(array_sort($posts, function ($value) {
                return $value['price'];
            }));
        }else if($sort == 3){
            // sort by highest price
            $posts = array_values(array_sort($posts, function ($value) {
                return $value['price'];
            }));
            $posts = array_reverse($posts);
        }
        return $posts;
    }
    
    private function filterByPrice($posts, $maxi_price, $mini_price){
        $filteredPosts = [];
        foreach($posts as $post){
            if($post['price'] >= $mini_price && $post['price'] <= $maxi_price)
                array_push($filteredPosts, $post);
        }
        return $filteredPosts;
    }

    private function clean($search_sentence){
        $ret = "";
        $strings = explode(' ', $search_sentence);
        foreach($strings as $tmp){
            if($tmp && $tmp != 'جميع' && $tmp != 'الاعلانات')
                $ret .= ' ' . $tmp;    
        }
        return $ret;
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
            // dd($features);
            $post['isColored'] = $post['isinMain'] = $post['isBreaking'] = 0;
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

    private function getFiltersOfSubCategory($subcategory_id){
        if($subcategory_id == 0)
            return [];
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
            $filters[$var] = $group->getFilters()->get();
        }
        return $filters;
    }
}
