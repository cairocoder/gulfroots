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
        $applied_ret = $request->get('applied_filters');
        $applied_filters = explode(',', $request->get('applied_filters'));
        // dd(explode(' : ', $applied_filters[0])[1]);
        $user = Auth::user();
        if(!$user){
            $user = new User;
            $user->id = -1;
        }
        $category = $request->get('cat-id');
        $search_sentence = $request->get('search_query') . $request->get('search_city');
        foreach($applied_filters as $applied){
            if($applied)
                $search_sentence .= ' ' . explode(' : ', $applied_filters[0])[1];
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
        // dd($search_sentence);
        $posts = Posts::search($search_sentence)->where('isArchived', 0)->where('isApproved', 1)->where('isinTop', 0)->get();
        $top = Posts::search($search_sentence.' isinTop')->where('isArchived', 0)->where('isApproved', 1)->get();
        $top = $top->shuffle();
        $top = $top->take(3);
        $posts = $this->getInfoOfPost($posts, $user);
        $top = $this->getInfoOfPost($top, $user);
        $parents = array_reverse($parents);
        $filters = $this->getFiltersOfSubCategory(1);
        // dd($filters);
        return view('searchresult', compact('posts', 'parents', 'top', 'request', 'filters', 'applied_ret'));
    }
    
    private function getInfoOfPost($posts, $user){
        $posts->map(function ($post) use($user) {
            $post['liked'] = Favorites::where('post_id', $post['id'])->where('user_id', $user->id)->count();
            $post['img'] = Post_Photos::where('post_id', $post['id'])->first()->photolink;
            $tmp = explode(' - ', $post->filters()->where('group_id', 1)->first()->name);
            $post['country'] = $tmp[1];
            $post['city'] = $tmp[0];
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
            $filters[$var] = $group->getFilters()->get();
        }
        return $filters;
    }
}
