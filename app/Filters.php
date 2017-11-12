<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filters extends Model
{
    protected $table = 'filters';
    protected $fillable = ['name', 'type', 'value_start','value_end','range_start'];


    public function groupFilters()
    {
    	return $this->hasMany('App\GroupsFilters','filter_id');
    }

  
}
