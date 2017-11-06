<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    //
    protected $table = 'conversations';
    public $timestamps = true;
    public $fillable = ['user_one','user_two','status'];

    public function messages()
    {
        return $this->hasMany('App\Messages','conversation_id')->with('sender');
    }

    /*
     * make a relation between first user from conversation
     *
     * return collection
     * */
    public function userone()
    {
        return $this->belongsTo('App\User','user_one');
    }

    /*
   * make a relation between second user from conversation
   *
   * return collection
   * */
    public function usertwo()
    {
        return $this->belongsTo('App\User','user_two');
    }
}
