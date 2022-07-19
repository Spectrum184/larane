<?php

namespace App\Http\Services;

use App\Http\Resources\ConversationResource;
use Illuminate\Support\Facades\DB;

class ConversationService
{
    /**
     * Get all conversation by user
     * 
     * @param integer $user_id
     */
    public function getAllConversation(int $user_id)
    {
        $conversation_arr = DB::table('users')->join("participants", "users.id", "=", "participants.user_id")->join("conversations", "participants.conversation_id", "=", "conversations.id")->where("users.id", $user_id)->get();

        // if ($conversation_arr->count() > 0) {
        //     $conversation_arr = collect($conversation_arr)->map(function ($data) {
        //         return new ConversationResource($data);
        //     });
        // }

        return $conversation_arr;
    }
}
