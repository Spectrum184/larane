<?php

use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Support\Facades\DB;

class MessageService
{
    const PAGINATE_ITEM = 15;

    /**
     * Get pagination messages
     * 
     * @param string $conversation_id
     */
    public function getMessageAtConversation(int $conversation_id)
    {
        $messages = DB::table("messages")->where("conversation_id", $conversation_id)->leftJoin("users", "users.id", "=", "messages.user_id")->orderBy("messages.created_at")->paginate(self::PAGINATE_ITEM);

        return new MessageResource($messages);
    }


    /**
     * create message
     * 
     * @param StoreMessageRequest $request
     */
    public function storeMessage($message)
    {
        $newMessage = Message::create($message);

        return new MessageResource($newMessage);
    }

    /**
     * delete message
     * 
     * @param integer $id
     */
    public function deleteMessage(int $id)
    {
        Message::destroy($id);

        return true;
    }
}
