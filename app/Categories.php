<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    //
    protected $table = 'categories';
    protected $fillable = ['name_ar','name_en','sub_id','slug_ar','slug_en','sort'];
    
    public function getSubCategories()
    {
    	return $this->hasMany('App\Categories', 'sub_id');
    }
    public function getMembers()
    {
    	return $this->hasMany('App\AdController');
    }

}
