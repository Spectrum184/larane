<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "name" => $this->name,
            "email" => $this->email,
            "theme" => $this->theme,
            "role" => $this->role,
            "roomNo" => $this->room_no,
            "avatar" => $this->avatar,
            "status" => $this->status,
            "sex" => $this->sex,
            "phone" => $this->phone,
            "facebook" => $this->facebook,
            "website" => $this->website,
            "birthday" => $this->birthday,
            "isActive" => $this->is_active,
            "createdAt" => $this->created_at,
            "updatedAt" => $this->updated_at,
        ];
    }
}
