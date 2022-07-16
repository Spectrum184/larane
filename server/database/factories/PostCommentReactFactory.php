<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostCommentReactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "post_comment_id" => $this->faker->numberBetween(1, 100),
            "user_id" => $this->faker->numberBetween(1, 100),
            "reaction" => $this->faker->numberBetween(0, 5),
        ];
    }
}
