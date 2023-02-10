<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('team_name');
            $table->string('team_leader');
            $table->string('phone');
            $table->string('team_1');
            $table->string('team_2');
            $table->string('team_3');
            $table->string('team_4');
            $table->tinyInteger('xs')->default(0);
            $table->tinyInteger('s')->default(0);
            $table->tinyInteger('m')->default(0);
            $table->tinyInteger('l')->default(0);
            $table->tinyInteger('xl')->default(0);
            $table->tinyInteger('xxl')->default(0);
            $table->enum('status',['0','1'])->default('0');
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
        Schema::dropIfExists('teams');
    }
};
