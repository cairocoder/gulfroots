<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use Searchable;
    //
    protected $table = 'categories';
    protected $fillable = ['name','sub_id','Des','icon','status', 'photo'];
    
    public function getSubCategories()
    {
    	return $this->hasMany('App\Categories', 'sub_id');
    }
    public function getMembers()
    {
    	return $this->hasMany('App\Ad','App\Posts');
    }
    public function getMainCategory()
    {
        return $this->belongsToMany('App\Categories');
    }
    public function filtersgroups()
    {
        return $this->belongsToMany('App\FiltersGroups', 'categories_filters_groups');
    }

}
