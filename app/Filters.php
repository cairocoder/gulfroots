<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filters extends Model
{
    protected $table = 'filters';
    protected $fillable = ['name', 'type', 'value_start','value_end','range_start', 'group_id'];


    public function filterGroup()
    {
    	return $this->belongsTo('App\FiltersGroups');
    }
    public function posts()
    {
        return $this->belongsToMany('App\Posts', 'filter_post');
    }

}
