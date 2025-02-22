<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::middleware('web')->group(function () {
    Route::get('/', function () {
        return view('home');
    });

    Route::get('/about', function () {
        return view('about');
    });

    Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
    Route::post('/contact', [ContactController::class, 'submit'])
        ->middleware([\App\Http\Middleware\ContactFormRateLimit::class])
        ->name('contact.submit');
});
