<?php

namespace App\Http\Service;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class TaskService
{
    /**
     * Get task for 1 month
     * 
     * @param string $date
     */
    public function getTaskInMonth(string $date)
    {
        $currentDate = Carbon::parse($date);

        $taskArr = DB::table("tasks")->whereBetween("work_date", [$currentDate->startOfMonth(), $currentDate->endOfMonth()])->leftJoin("users", "tasks.user_id", "=", "users.id")->get();

        return $taskArr;
    }
}
