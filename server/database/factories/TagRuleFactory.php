<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TagRuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "tag_id" => $this->faker->numberBetween(1, 200),
            "rule_id" => $this->faker->numberBetween(1, 100),
        ];
    }
}
