<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    //
    protected $table = 'reviews';
    protected $fillable = ['comment','rate','post_id','user_id'];

    public function post()
    {
        return $this->belongsTo('App\Posts');
    }
    public function user()
    {
    	return $this->belongsTo('App\UserSubscriptions');
    }
    
}
