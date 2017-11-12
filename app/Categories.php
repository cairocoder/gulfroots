<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    //
    protected $table = 'categories';
    protected $fillable = ['name','sub_id','Des','icon','status'];
    
    public function getSubCategories()
    {
    	return $this->hasMany('App\Categories', 'sub_id');
    }
    public function getMembers()
    {
    	return $this->hasMany('App\Ad');
        return $this->hasMany('App\Posts');
    }

}
