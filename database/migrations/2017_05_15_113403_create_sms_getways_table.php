<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmsGetwaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_getways', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('method'); // 0=> GET || 1=> POST
            $table->string('name');
            $table->text('endpoint');
            $table->string('username');
            $table->string('password');
            $table->string('sender_name');
            $table->string('other_param1');
            $table->string('other_param2');
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
        Schema::dropIfExists('sms_getways');
    }
}
