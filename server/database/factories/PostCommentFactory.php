<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostCommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "post_id" => $this->faker->numberBetween(1, 100),
            "user_id" => $this->faker->numberBetween(1, 100),
            "content" => $this->faker->text(),
        ];
    }
}
