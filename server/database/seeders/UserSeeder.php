<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
            'password' => Hash::make("thanh1804"),
            'remember_token' => Str::random(10),
            'role' => "ADMIN",
            "status" => "I'm unstoppable!",
            "birthday" => Carbon::createFromFormat("Y-m-d", "1995-04-18"),
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now(),
        ]);

        DB::table("users")->insert([
            'name' => "Tu",
            'email' => "anhtudang95@gmail.com",
            'email_verified_at' => now(),
            'password' => Hash::make("anhtudeptrai"),
            'remember_token' => Str::random(10),
            'role' => "ADMIN",
            "status" => "Tao la Bo"
        ]);

        // seed random data
        User::factory(100)->create();
    }
}
