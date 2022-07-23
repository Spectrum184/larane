<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaginationResource extends JsonResource
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
            "currentPage" => $this->meta->current_page,
            "lastPage" => $this->meta->last_page,
            "perPage" => $this->meta->per_page,
            "total" => $this->meta->total,
            "from" => $this->meta->from,
            "to" => $this->meta->to,
            "messages" => MessageResource::collection($this->data),
        ];
    }
}
