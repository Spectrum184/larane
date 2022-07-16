<?php

namespace Database\Seeders;

use App\Models\Participant;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            TaskSeeder::class,
            PostSeeder::class,
            RuleSeeder::class,
            PostCommentSeeder::class,
            PostCommentReactSeeder::class,
            ConversationSeeder::class,
            MessageSeeder::class,
            ParticipantSeeder::class,
        ]);
    }
}
