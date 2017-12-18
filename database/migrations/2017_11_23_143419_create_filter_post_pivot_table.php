<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilterPostPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filter_post', function (Blueprint $table) {
            $table->integer('filters_id')->unsigned()->index();
            $table->foreign('filters_id')->references('id')->on('filters')->onDelete('cascade');
            $table->integer('posts_id')->unsigned()->index();
            $table->foreign('posts_id')->references('id')->on('posts')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('filter_post');
    }
}
