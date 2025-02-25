<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'text_input' => 'required|string|max:255',
        ]);

        // Process the form data here
        // For demonstration, we'll just log it
        Log::info('Form submitted with data:', $validated);

        return redirect()->back()->with('success', 'Form submitted successfully!');
    }
}