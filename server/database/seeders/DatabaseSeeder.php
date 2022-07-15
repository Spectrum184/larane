<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //seed admin user
        DB::table("users")->insert([
            'name' => "Thanh",
            'email' => "nvthanh1804@gmail.com",
            'email_verified_at' => now(),
            'password' => '$2a$12$oNs7nzmXQtjdvz6B0GZYYevuLJGBP0llXB7FU/p9UyLBmL8B9yDMa', // thanh1804
            'remember_token' => Str::random(10),
            'role' => "ADMIN"
        ]);

        // seed random data
        \App\Models\User::factory(100)->create();
    }
}
