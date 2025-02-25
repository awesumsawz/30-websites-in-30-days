<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/submit', [FormController::class, 'store'])->name('submit');

Route::get('/depress', function () {
    return view('depress');
});
