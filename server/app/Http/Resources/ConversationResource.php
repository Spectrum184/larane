<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ConversationResource extends JsonResource
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
            "lastMessage" => $this->last_message,
            "lastMessageAt" => $this->last_message_at,
            "title" => $this->title,
            "image" => $this->image,
            "theme" => $this->theme,
            "creatorId" => $this->creator_id,
        ];
    }
}
