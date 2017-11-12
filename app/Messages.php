<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    //
    protected $table = 'messages';

    public $timestamps = true;

    public $fillable = ['message','is_seen','user_id','conversation_id'];

    public function getHumansTimeAttribute()
    {
        $date = $this->created_at;
        $now = $date->now();

        return $date->diffForHumans($now, true);
    }

    public function conversation()
    {
        return $this->belongsTo('App\Conversation');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function sender()
    {
        return $this->user();
    }

    // public function receiver()
    // {
    //     return $this->user();
    // }


}
