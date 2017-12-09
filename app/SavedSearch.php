<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SavedSearch extends Model
{
    //
    protected $table = 'savedsearch';
    protected $fillable = ['query', 'user_id'];
}
