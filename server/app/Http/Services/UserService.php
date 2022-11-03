<?php

namespace App\Http\Services;

use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class UserService
{
    /**
     * get user by name
     * 
     * @param string $name
     */
    public function getUserByName(string $name)
    {
        $users = DB::table('users')->where("name", "like", "%" . $name . "%")->get();

        if (count($users) > 0) {
            return UserResource::collection($users);
        }

        return $users;
    }
}
