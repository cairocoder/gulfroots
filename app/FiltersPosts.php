<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FiltersPosts extends Model
{
    //
    protected $table = 'filter_post';
    protected $fillable = ['filter_id','post_id'];

    public function posts(){
        return $this->belongsTo('App\Posts');
    }

    public function filters(){
        return $this->belongsTo('App\Filters');
    }
}
