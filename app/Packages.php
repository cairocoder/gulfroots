<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    //
    protected $table = 'packages';
    protected $fillable = ['name_ar','name_en','price','desciption_ar','desciption_en','features_ar',
    'isBestValue'];
    
    public function getMembers()
    {
    	return $this->hasMany('App\Ad');
    }
}
