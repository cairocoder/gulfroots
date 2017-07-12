<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SiteSettings extends Model
{
    protected $table 	= 'site_settings';
    protected $fillable = ['site_name_ar','site_name_en','tags_ar','tags_en','meta_description_ar','meta_description_en','	default_sms_getway','default_email','contact_email','subscription_mail'];
}
