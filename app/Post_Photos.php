<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post_Photos extends Model
{
    //
    protected $fillable = ['post_id', 'photolink'];
 
    public function post()
    {
        return $this->belongsTo('App\Posts');
    }
}
