<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::post('/contact', function () {
    $data = request()->validate([
        'name' => ['required', 'string', 'max:120'],
        'email' => ['required', 'email', 'max:160'],
        'location' => ['required', 'string', 'max:120'],
        'budget' => ['required', 'string', 'max:120'],
        'message' => ['required', 'string', 'max:3000'],
    ]);

    $contactMessage = ContactMessage::create($data);

    Mail::to(env('CONTACT_NOTIFICATION_EMAIL', config('mail.from.address')))
        ->send(new ContactMessageReceived($contactMessage));

    return back()->with('success', 'Thanks! Your message has been received.');
})->name('contact.store');
