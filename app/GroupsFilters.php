<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupsFilters extends Model
{
    //
    protected $table 	= 'groups_filters';
    protected $fillable = ['group_id','filter_id'];

    public function group()
    {
    	return $this->belongsTo('App\FiltersGroups','group_id');
    }

    public function filter()
    {
    	return $this->belongsTo('App\Filters','filter_id');
    }

}
