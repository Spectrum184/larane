<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "emoji" => "string|max:100|nullable",
            "user_id" => [
                "required" => "This is anonymous user?",
                "integer" => "User id must be integer",
            ],
            "conversation_id" => [
                "required" => "This is anonymous conversation?",
                "integer" => "User id must be integer",
            ],
        ];
    }
}
