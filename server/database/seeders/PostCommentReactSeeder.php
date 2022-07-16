<?php

namespace Database\Seeders;

use App\Models\PostCommentReact;
use Illuminate\Database\Seeder;

class PostCommentReactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostCommentReact::factory(50)->create();
    }
}
