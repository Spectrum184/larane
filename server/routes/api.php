<?php

use App\Http\Controllers\ConversationController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//Router of task
Route::middleware(["auth:sanctum", "throttle:6,1"])->prefix("tasks")->name("tasks.")->controller(TaskController::class)->group(function () {
    Route::get("/month/{date}", "getTaskInMonth")->name("current.month");
});


//Router of message
Route::middleware(["auth:sanctum", "throttle:6,1"])->prefix("messages")->name("messages.")->controller(MessageController::class)->group(function () {
    Route::get("/month/{date}", "getTaskInMonth")->name("current.month");
});

//Router of message
Route::middleware(["auth:sanctum", "throttle:6,1"])->prefix("conversations")->name("conversations.")->controller(ConversationController::class)->group(function () {
    Route::get("/{user_id}", "getAllConversation")->name("all.conversation");
});
