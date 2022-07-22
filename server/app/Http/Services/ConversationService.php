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
            return ConversationResource::collection($conversation_arr);
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
        $conversation = DB::table('conversations')->where("conversations.id", $conversation_id)->get();

        return new ConversationResource($conversation);
    }


    /**
     * Get conversation by name 
     * 
     * @param string $name
     */
    public function getConversationByName(string $name)
    {
        $conversation = DB::table('conversations')->where("conversations.id", "like", "%" . $name . "%")->get();

        if (count($conversation) > 0) {
            return ConversationResource::collection($conversation);
        }

        return  $conversation;
    }
}
