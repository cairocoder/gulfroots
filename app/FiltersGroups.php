<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FiltersGroups extends Model
{
    protected $table 	= 'filters_groups';
    protected $fillable = ['group_name'];

    public function groupFilters()
    {
      return $this->belongsToMany('App\GroupsFilters','filters', 'id','id' );
    	//return $this->hasMany('App\GroupsFilters','group_id');
    }

}
