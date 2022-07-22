<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            "message" => $this->message,
            "emoji" => $this->emoji,
            "imageLink" => $this->image_link,
            "attackFile" => $this->attack_file,
            "seen" => $this->seen,
            "userId" => $this->user_id,
            "userName" => $this->name,
            "userAvatar" => $this->avatar,
        ];
    }
}