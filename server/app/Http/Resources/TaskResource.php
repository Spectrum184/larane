<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "content" => $this->content,
            "done" => $this->done,
            "workDate" => $this->work_date,
            "type" => $this->type,
            "createdAt" => $this->created_at,
            "userId" => $this->user_id,
            "userName" => $this->name,
        ];
    }
}
