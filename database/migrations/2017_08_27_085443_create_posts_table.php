<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('short_des');
            $table->string('long_des');
            $table->string('detailed_address');
            $table->string('seller_name');
            $table->string('seller_email');
            $table->string('seller_contact_no');
            $table->string('longitude');
            $table->string('latitude');
            $table->integer('price');
            $table->integer('isArchived')->default(0);
            $table->integer('isApproved')->default(1);
            $table->integer('status');
            $table->integer('sub_category_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('sub_category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
