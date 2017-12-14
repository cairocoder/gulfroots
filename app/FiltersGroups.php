<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FiltersGroups extends Model
{
    protected $table 	= 'filters_groups';
    protected $fillable = ['group_name', 'type'];

    public function getFilters()
    {
        return $this->hasMany('App\Filters', 'group_id');
    }
    public function categories()
    {
        return $this->belongsToMany('App\Categories', 'categories_filters_groups');
    }

}
