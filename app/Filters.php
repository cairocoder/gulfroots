<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filters extends Model
{
    protected $table = 'filters';
    protected $fillable = ['name', 'type', 'values', 'group_id'];


    public function filterGroup()
    {
    	return $this->belongsTo('App\FiltersGroups');
    }

}
