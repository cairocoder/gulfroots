<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
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


}
