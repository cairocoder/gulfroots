<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSubscriptions extends Model
{
    protected $table 	= 'user_subscriptions';
    protected $fillable = ['user_id','months','posts','status'];

    
    public function getMembers()
    {
    	return $this->hasMany('App\AdController');
    }
}
