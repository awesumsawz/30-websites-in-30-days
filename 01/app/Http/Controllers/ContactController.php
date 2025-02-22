<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Rules\Honeypot;

class ContactController extends Controller
{
    public function show()
    {
        return view('layouts.contact');
    }

    public function submit(Request $request)
    {
        // Validate the honeypot field
        if ($request->filled('website')) {
            return redirect()->back()->with('error', 'Something went wrong. Please try again.');
        }

        // Validate the form
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10|max:2000',
            'g-recaptcha-response' => 'required|recaptcha',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        try {
            // Send email
            Mail::send('emails.contact', [
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message
            ], function($message) use ($request) {
                $message->from($request->email, $request->name);
                $message->to(config('mail.from.address'));
                $message->subject('New Contact Form Submission');
            });

            return redirect()->back()->with('success', 'Thank you for your message. We will get back to you soon!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Sorry, there was an error sending your message. Please try again later.');
        }
    }
} 