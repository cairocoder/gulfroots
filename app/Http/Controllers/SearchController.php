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
    public function search(){
        // dd($_REQUEST);
        $posts = Posts::where('isApproved', 1);
        $top = Posts::where('isApproved', 1)->where('isTop', 1);
        if($_REQUEST['search_city']){
            $top->where('city', 'LIKE',"%{$_REQUEST['search_city']}%");
            $top->where('city', 'LIKE',"%{$_REQUEST['search_city']}%");
            $posts->where('search_sentence', 'LIKE',"%{$_REQUEST['search_city']}%");
            $posts->where('search_sentence', 'LIKE',"%{$_REQUEST['search_city']}%");
        }
        // dd($search_sentence);
        $search_sentence = explode(' ', $_REQUEST['search_query']);
        $category = $_REQUEST['cat-id'];
        $applied_filters = explode(',', $_REQUEST['applied_filters']);
        $parents = [];
        if($category > 0){
            $ancestor = Categories::findorfail($category);
            array_push($parents, $ancestor->toArray());
            array_push($applied_filters, $parents[0]['name_ar']);
            while($ancestor->parent_id != null){
            array_push($applied_filters, $ancestor['name_ar']);
                $ancestor = Categories::findorfail($ancestor->parent_id);
                array_push($parents, $ancestor->toArray());
            }
            $parents[0]['subcategories'] = Categories::where('parent_id', $parents[0]['id'])->get()->toArray();
        }
        // dd($applied_filters);
        foreach($search_sentence as $search){
            if($search){   
                $posts->where('title', 'LIKE',"%{$search}%");
                $posts->orwhere('description', 'LIKE',"%{$search}%");
                $posts->orwhere('search_sentence', 'LIKE',"%{$search}%");
                $top->where('title', 'LIKE', "%{$search}%");
                $top->orwhere('description', 'LIKE', "%{$search}%");
                $top->orwhere('search_sentence', 'LIKE', "%{$search}%");
            }
        }
        foreach($applied_filters as $applied){
            if($applied){
                $ret = trim($this->clean(array_reverse(explode(' : ', $applied))[0]));
                $posts->where('search_sentence', 'LIKE',"%{$ret}%");
                $top->where('search_sentence', 'LIKE',"%{$ret}%");
            }
        }
        $top->inRandomOrder()->take(3);
        if($_REQUEST['maxi_price'] and $_REQUEST['maxi_price']){
            $posts->whereBetween('price', [$_REQUEST['mini_price'], $_REQUEST['maxi_price']]);
            $top->whereBetween('price', [$_REQUEST['mini_price'], $_REQUEST['maxi_price']]);
        }else if($_REQUEST['maxi_price']){
            $posts->where('price', '<=', $_REQUEST['maxi_price']);
            $top->where('price', '<=', $_REQUEST['maxi_price']);
        }else if(!$_REQUEST['mini_price']){
            $posts->where('price', '>=',$_REQUEST['mini_price']);
            $top->where('price', '>=',$_REQUEST['mini_price']);
        }
        if($_REQUEST['sort'] > 0){
            $posts = $this->sortResults($posts, $_REQUEST['sort']);
        }
        $posts = $this->getInfoOfPost($posts)->get();
        $top = $this->getInfoOfPost($top)->get();
        $parents = array_reverse($parents);
        // dd($posts);
        // dd($top);
        if(count($parents) > 0)$filters = $this->getFiltersOfSubCategory($parents[0]['id']);
        else $filters = [];
        // $top = $top->get()->map(function($t){
        //     $t['img'] = "";
        //     $t['liked'] = "";
        //     return $t;
        // });
        // $posts = $posts->get()->map(function($t){
        //     $t['img'] = "";
        //     $t['liked'] = "";
        //     return $t;
        // });
        //->pluck('attributes')
        return view('searchresult', compact('posts', 'parents', 'top', '_REQUEST', 'filters'));
    }

    private function sortResults($posts, $sort){
        if($sort == 1){
            // sort by latest
            $posts->latest();
        }else if($sort == 2){
            // sort by least price
            $posts->orderBy('price', 'asc');
        }else if($sort == 3){
            // sort by highest price
            $posts->orderBy('price', 'desc');
        }
        return $posts;
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

    private function getInfoOfPost($posts){
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $posts->get()->map(function ($post) use($user) {
            $features = $post->getFeatures()->get();
            // foreach($features as $feature){
            //     if($feature->type == 1){
            //         if($feature->expiry_date->lt(\Carbon\Carbon::now()))
            //             $post['isColored'] = 0;
            //     }
            //     if($feature->type == 2){
            //         if($feature->expiry_date->lt(\Carbon\Carbon::now()))
            //             $post['isinMain'] = 0;
            //     }
            //     if($feature->type == 3){
            //         if($feature->expiry_date->lt(\Carbon\Carbon::now()))
            //             $post['isTop'] = 0;
            //     }
            //     if($feature->type == 5){
            //         if($feature->expiry_date->lt(\Carbon\Carbon::now()))
            //             $post['isUrgent'] = 0;
            //     }
            // }
            $post->save();
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
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
