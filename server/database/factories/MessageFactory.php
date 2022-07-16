<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "message" => $this->faker->text(),
            "user_id" => $this->faker->numberBetween(1, 100),
            "conversation_id" => $this->faker->numberBetween(1, 100),
        ];
    }
}
