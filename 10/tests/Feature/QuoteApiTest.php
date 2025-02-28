<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class QuoteApiTest extends TestCase
{
    /**
     * Test getting a Ron Swanson quote.
     */
    public function test_get_ron_swanson_quote(): void
    {
        $response = $this->postJson('/api/quote', ['value' => true]);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'quote',
                     'character'
                 ])
                 ->assertJson([
                     'character' => 'Ron Swanson'
                 ]);
    }

    /**
     * Test getting an April Ludgate quote.
     */
    public function test_get_april_ludgate_quote(): void
    {
        $response = $this->postJson('/api/quote', ['value' => false]);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'quote',
                     'character'
                 ])
                 ->assertJson([
                     'character' => 'April Ludgate'
                 ]);
    }

    /**
     * Test validation error when value is missing.
     */
    public function test_validation_error_when_value_missing(): void
    {
        $response = $this->postJson('/api/quote', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['value']);
    }

    /**
     * Test validation error when value is not boolean.
     */
    public function test_validation_error_when_value_not_boolean(): void
    {
        $response = $this->postJson('/api/quote', ['value' => 'not-a-boolean']);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['value']);
    }
} 