<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTagRuleRequest;
use App\Http\Requests\UpdateTagRuleRequest;
use App\Models\TagRule;

class TagRuleController extends Controller
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
     * @param  \App\Http\Requests\StoreTagRuleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTagRuleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TagRule  $tagRule
     * @return \Illuminate\Http\Response
     */
    public function show(TagRule $tagRule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TagRule  $tagRule
     * @return \Illuminate\Http\Response
     */
    public function edit(TagRule $tagRule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTagRuleRequest  $request
     * @param  \App\Models\TagRule  $tagRule
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTagRuleRequest $request, TagRule $tagRule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TagRule  $tagRule
     * @return \Illuminate\Http\Response
     */
    public function destroy(TagRule $tagRule)
    {
        //
    }
}
