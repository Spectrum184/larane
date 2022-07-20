<?php

namespace App\Http\Services;

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
        $start_of_month = Carbon::create($date)->startOfMonth();
        $end_of_month = Carbon::create($date)->endOfMonth();

        $task_arr = DB::table("tasks")->whereBetween("work_date", [$start_of_month, $end_of_month])->leftJoin("users", "tasks.user_id", "=", "users.id")->get();

        if ($task_arr->count() > 0) {
            $task_arr = collect($task_arr)->map(function ($data) {
                return [
                    "id" => $data->id,
                    "title" => $data->title,
                    "content" => $data->content,
                    "done" => $data->done,
                    "workDate" => $data->work_date,
                    "type" => $data->type,
                    "createdAt" => $data->created_at,
                    "userId" => $data->user_id,
                    "userName" => $data->name,
                ];
            });
        }

        return $task_arr;
    }
}
