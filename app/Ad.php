<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    //
    protected $table = 'ads';
    protected $fillable = ['user_id','category_id','package_id','name','description','slug',
    'type'];
}
