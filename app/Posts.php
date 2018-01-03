<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    //
    protected $table = 'posts';
    protected $fillable = ['title', 'description', 'address', 'seller_name', 'seller_email', 'seller_number', 'longitude', 'latitude',
     'price', 'category_id', 'creator_id', 'status', 'type', 'seller_type', 'search_sentence', 'country', 'city'];
    protected $casts = [
        'search_sentence' => 'json'
    ];
    public function category()
    {
        return $this->belongsTo('App\Categories');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getPhotos()
    {
        return $this->hasMany( 'App\Post_Photos', 'id', 'post_id');
    }

    public function getFeatures()
    {
        return $this->hasMany('App\PostFeatures', 'post_id');
    }
}
