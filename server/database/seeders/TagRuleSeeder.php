<?php

namespace Database\Seeders;

use App\Models\TagRule;
use Illuminate\Database\Seeder;

class TagRuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TagRule::factory(100)->create();
    }
}
