<?php

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
        $conversation_arr = DB::table('conversations')->where("user_id", $user_id)->leftJoin("users", "conversations.user_id", "=", "users.id")->orderBy("updated_at", "desc")->get();

        if ($conversation_arr->count() > 0) {
            $conversation_arr = collect($conversation_arr)->map(function ($data) {
                return new ConversationResource($data);
            });
        }

        return $conversation_arr;
    }
}
