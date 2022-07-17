<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

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
            "title" => $this->faker->text(20),
            "content" => $this->faker->text(200),
            "work_date" => $this->faker->dateTimeBetween('-5 week', '+5 week'),
            "done" => $this->faker->randomElement([0, 1]),
            "type" => $this->faker->numberBetween(0, 5),
            "user_id" => $this->faker->numberBetween(1, 99)
        ];
    }
}
