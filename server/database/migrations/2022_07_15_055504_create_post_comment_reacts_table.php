<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostCommentReactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_comment_reacts', function (Blueprint $table) {
            $table->id();
            $table->foreignId("post_comment_id")->constrained("posts");
            $table->foreignId("user_id")->constrained("users");
            $table->tinyInteger('reaction')->default(0);
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
        Schema::dropIfExists('post_comment_reacts');
    }
}
