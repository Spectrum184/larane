<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->tinyInteger('theme')->default(1);
            $table->string('role', 50)->nullable(false)->default('BALL_BALL');
            $table->string('room_no', 100)->nullable();
            $table->string('avatar')->nullable();
            $table->string('status', 300)->nullable();
            $table->string('sex', 50)->default('male');
            $table->string('phone', 100)->nullable();
            $table->string('facebook', 100)->nullable();
            $table->string('website', 150)->nullable();
            $table->dateTime('birthday')->nullable();
            $table->tinyInteger('is_active')->default(1);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
