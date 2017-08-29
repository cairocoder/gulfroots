<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    //
    protected $table = 'posts';
    protected $fillable = ['name_en','name_ar','short_des_en','short_des_ar','long_des_en','long_des_ar','price','category_id','sub_category_id','user_id','photos'];

    public function category()
    {
        return $this->belongsTo('App\Categories');
    }
    public function subcategory()
    {
        return $this->belongsTo('App\Categories');
    }
    public function user()
    {
        return $this->belongsTo('App\UserSubscriptions');
    }
}
