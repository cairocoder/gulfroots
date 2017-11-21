<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favourites extends Model
{
    //
    protected $table = 'favourites';
    protected $fillable = ['user_id', 'post_id'];
}
