
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
            "title" => $this->title,
            "creatorId" => $this->creator_id,
            "theme" => $this->theme,
            "createdAt" => $this->created_at,
            "userId" => $this->user_id,
            "userName" => $this->name,
            "avatar" => $this->avatar,
        ];
    }
}
