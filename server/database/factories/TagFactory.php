<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name_en" => $this->faker->text(50),
            "name_vi" => $this->faker->text(50),
            "name_ja" => $this->faker->text(50),
        ];
    }
}
