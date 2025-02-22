<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Cache\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class ContactFormRateLimit
{
    protected $limiter;

    public function __construct(RateLimiter $limiter)
    {
        $this->limiter = $limiter;
    }

    public function handle(Request $request, Closure $next): Response
    {
        $key = 'contact-form:' . $request->ip();

        // Allow 3 submissions per hour
        if ($this->limiter->tooManyAttempts($key, 3)) {
            return redirect()->back()
                ->with('error', 'Too many attempts. Please try again later.')
                ->withInput();
        }

        $this->limiter->hit($key, 60 * 60); // Keep record for 1 hour

        return $next($request);
    }
} 