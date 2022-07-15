<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostCommentReactRequest;
use App\Http\Requests\UpdatePostCommentReactRequest;
use App\Models\PostCommentReact;

class PostCommentReactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostCommentReactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostCommentReactRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PostCommentReact  $postCommentReact
     * @return \Illuminate\Http\Response
     */
    public function show(PostCommentReact $postCommentReact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PostCommentReact  $postCommentReact
     * @return \Illuminate\Http\Response
     */
    public function edit(PostCommentReact $postCommentReact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostCommentReactRequest  $request
     * @param  \App\Models\PostCommentReact  $postCommentReact
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostCommentReactRequest $request, PostCommentReact $postCommentReact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PostCommentReact  $postCommentReact
     * @return \Illuminate\Http\Response
     */
    public function destroy(PostCommentReact $postCommentReact)
    {
        //
    }
}
