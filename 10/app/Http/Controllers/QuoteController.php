<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

class QuoteController extends Controller
{
    /**
     * Ron Swanson quotes
     */
    private array $ronQuotes = [
        "Never half-ass two things. Whole-ass one thing.",
        "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.",
        "I'm not interested in caring about people.",
        "Fishing relaxes me. It's like yoga, except I still get to kill something.",
        "When I eat, it is the food that is scared.",
        "The less I know about other people's affairs, the happier I am.",
        "I regret nothing. The end.",
        "Keep your tears in your eyes where they belong.",
        "I'd rather bleed out than talk about my feelings.",
        "I like saying 'No.' It lowers their enthusiasm."
    ];

    /**
     * April Ludgate quotes
     */
    private array $aprilQuotes = [
        "I hate talking to people about things.",
        "Time is money, money is power, power is pizza, and pizza is knowledge.",
        "I'm not interested in caring about people.",
        "I don't want to do things. I want to not do things.",
        "I guess I kind of hate most things.",
        "I'm only here because I'm being paid.",
        "I'll murder you and everyone you care about.",
        "I don't care enough to hate it.",
        "I'm not crying, okay? I'm allergic to jerks.",
        "If I had to have a stripper name, it would be Equality."
    ];

    /**
     * Get a random quote based on the boolean value
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getQuote(Request $request): JsonResponse
    {
        $request->validate([
            'value' => 'required|boolean',
        ]);

        $value = $request->boolean('value');
        
        if ($value) {
            // Return Ron Swanson quote
            $quote = $this->ronQuotes[array_rand($this->ronQuotes)];
            $character = 'Ron Swanson';
        } else {
            // Return April Ludgate quote
            $quote = $this->aprilQuotes[array_rand($this->aprilQuotes)];
            $character = 'April Ludgate';
        }

        return Response::json([
            'quote' => $quote,
            'character' => $character,
        ]);
    }
} 