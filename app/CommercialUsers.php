<?php

namespace App;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class CommercialUsers extends Model
{
    use Searchable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'contact_number', 'whatsapp_number', 'address', 'logo', 'phone_number', 'country_code', 'commercial_record_number', 'commercial_record_file', 'maaroof_url', 'longitude', 'latitude'
    ];
}
