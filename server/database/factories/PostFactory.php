<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->sentence(100),
            "content" => $this->faker->text(),
            "user_id" => $this->faker->numberBetween(0, 101),
        ];
    }
}
