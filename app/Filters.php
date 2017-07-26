<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filters extends Model
{
    protected $table = 'filters';
    protected $fillable = ['name_ar', 'name_en', 'type', 'value_ar_start', 'value_en_start'];
}
