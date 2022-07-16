<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->sentence(255),
            "content" => $this->faker->text(200),
            "work_date" => $this->faker->date(),
            "done" => $this->faker->randomElement([0, 1]),
            "user_id" => $this->faker->numberBetween(0, 101)
        ];
    }
}
