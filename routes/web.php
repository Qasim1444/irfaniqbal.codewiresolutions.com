<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::post('/contact', function () {
    request()->validate([
        'name' => ['required', 'string', 'max:120'],
        'email' => ['required', 'email', 'max:160'],
        'location' => ['required', 'string', 'max:120'],
        'budget' => ['required', 'string', 'max:120'],
        'message' => ['required', 'string', 'max:3000'],
    ]);

    return back()->with('success', 'Thanks! Your message has been received.');
})->name('contact.store');
