<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use Searchable;
    //
    protected $table = 'posts';
    protected $fillable = ['title', 'short_des', 'long_des', 'detailed_address', 'seller_name', 'seller_email',
        'seller_contact_no', 'longitude', 'latitude', 'price', 'sub_category_id', 'user_id'];

    public function category()
    {
        return $this->belongsTo('App\Categories');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getMembers()
    {
        return $this->hasMany( 'App\Post_Photos', 'id', 'post_id');
    }

    public function filters()
    {
        return $this->hasManyThrough('App\Filters', 'filter_post');
    }

    public function getFeatures()
    {
        return $this->hasMany('App\PostFeatures', 'post_id');
    }
}
