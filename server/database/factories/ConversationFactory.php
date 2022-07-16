<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConversationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->word(),
            "creator_id" => $this->faker->numberBetween(1, 100),
            "theme" => $this->faker->numberBetween(1, 10),
        ];
    }
}
