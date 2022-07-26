<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTagPostRequest;
use App\Http\Requests\UpdateTagPostRequest;
use App\Models\TagPost;

class TagPostController extends Controller
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
     * @param  \App\Http\Requests\StoreTagPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTagPostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TagPost  $tagPost
     * @return \Illuminate\Http\Response
     */
    public function show(TagPost $tagPost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TagPost  $tagPost
     * @return \Illuminate\Http\Response
     */
    public function edit(TagPost $tagPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTagPostRequest  $request
     * @param  \App\Models\TagPost  $tagPost
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTagPostRequest $request, TagPost $tagPost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TagPost  $tagPost
     * @return \Illuminate\Http\Response
     */
    public function destroy(TagPost $tagPost)
    {
        //
    }
}
