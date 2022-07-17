<?php

use App\Http\Controllers\TaskController;
use App\Http\Resources\UserResource;
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
    return new UserResource($request->user());
});

//Router of task
Route::middleware(["auth:sanctum"])->prefix("tasks")->name("tasks.")->controller(TaskController::class)->group(function () {
    Route::get("/month/{date}", "getTaskInMonth")->name("current.month");
});
