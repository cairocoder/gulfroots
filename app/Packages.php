<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Packages extends Model
{
    //
    protected $table = 'packages';
    protected $fillable = ['name','price','desciption','features_ar',
    'isBestValue'];
    
    public function getMembers()
    {
    	return $this->hasMany('App\Ad');
    }
}
