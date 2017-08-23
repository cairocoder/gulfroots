<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    //
    protected $table = 'ads';
    protected $fillable = ['user_id','category_id','package_id','name','description','slug',
    'type'];

    public function category()
    {
        return $this->belongsTo('App\Categories');
    }
    public function package()
    {
        return $this->belongsTo('App\Packages');
    }
    public function user()
    {
        return $this->belongsTo('App\UserSubscriptions');
    }
}
