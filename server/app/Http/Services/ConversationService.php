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
        $conversation_arr = DB::table('conversations')->leftJoin("participants", "conversations.id", "=", "participants.conversation_id")->where("participants.user_id", $user_id)->get();

        if ($conversation_arr->count() > 0) {
            $conversation_arr = collect($conversation_arr)->map(function ($data) {
                return [
                    "id" => $data->id,
                    "lastMessage" => $data->last_message,
                    "lastMessageAt" => $data->last_message_at,
                    "title" => $data->title,
                    "image" => $data->image,
                ];
            });
        }

        return $conversation_arr;
    }

    /**
     * Get conversation by id
     * 
     * @param integer $conversation_id
     */
    public function getConversation(int $conversation_id)
    {
        $conversation_arr = DB::table('conversations')->leftJoin("participants", "conversations.id", "=", "participants.conversation_id")->where("conversations.id", $conversation_id)->get();

        // if ($conversation_arr->count() > 0) {
        //     $conversation_arr = collect($conversation_arr)->map(function ($data) {
        //         return [
        //             "id" => $data->id,
        //             "lastMessage" => $data->last_message,
        //             "lastMessageAt" => $data->last_message_at,
        //             "title" => $data->title,
        //             "image" => $data->image,
        //         ];
        //     });
        // }

        return $conversation_arr;
    }
}
