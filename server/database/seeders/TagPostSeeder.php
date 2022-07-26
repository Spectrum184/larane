<?php

namespace Database\Seeders;

use App\Models\TagPost;
use Illuminate\Database\Seeder;

class TagPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TagPost::factory(100)->create();
    }
}
