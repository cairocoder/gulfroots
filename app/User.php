<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Messages;
use App\Conversation;
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];


    public function getMessages()
    {
        return $this->hasMany('App\Messages','id');
    }

    public function getMessagesFrom()
    {
        return Messages::where('from_id',$this->id)->select('to_id')->get()->groupBy('to_id');
        //return $this->hasMany('App\Messages','from_id');
    }

    public function getMessagesTo()
    {
        return Messages::where('to_id',$this->id)->select('from_id')->get()->groupBy('from_id');
        //return $this->hasMany('App\Messages','to_id');
    }

    public function getConversation()
    {
        return $this->hasMany('App\Conversation','id');
    }

    public function getBills()
    {
        return $this->hasMany('App\Bills','user_id');
    }


    public function getSubscriptions()
    {
        return $this->hasMany('App\UserSubscriptions','user_id');
    }

    public function getCommerical()
    {
        return $this->hasOne('App\CommercialUsers','user_id');
    }

    public function isCommercial()
    {
        if($this->getCommerical !== null){
            return true;
        }
        return false;
    }

    public function getPosts()
    {
        return $this->hasMany('App\Posts','user_id');
    }
}

