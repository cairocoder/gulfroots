<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSiteSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('site_name_ar');
            $table->string('site_name_en');
            $table->text('tags_ar');
            $table->text('tags_en');
            $table->text('meta_description_ar');
            $table->text('meta_description_en');
            $table->integer('default_sms_getway')->unsigned();
            $table->integer('default_email')->unsigned();
            $table->integer('contact_email')->unsigned();
            $table->integer('subscription_mail')->unsigned();
            $table->timestamps();
            $table->foreign('default_sms_getway')->references('id')->on('sms_getways')->onDelete('cascade');
            $table->foreign('default_email')->references('id')->on('sender_emails')->onDelete('cascade');
            $table->foreign('contact_email')->references('id')->on('sender_emails')->onDelete('cascade');
            $table->foreign('subscription_mail')->references('id')->on('sender_emails')->onDelete('cascade');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_settings');
    }
}

