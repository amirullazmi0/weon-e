<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Calibrate;
use App\Models\User;
use App\Models\Sensor;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Amirull Azmi',
            'email' => 'amirullazmi0@gmail.com',
            'password' => bcrypt('11111111')
        ]);

        \App\Models\Sensor::create([
            'value1' => 7,
            'value2' => 200,
            'value3' => 28,
            'value4' => 2,
            'value5' => 1,
        ]);

        $calibrate = [
            [
                'name' => 'ph',
                'a' => 0,
                'b' => 0,
            ],
            [
                'name' => 'tds',
                'a' => 0,
                'b' => 0,
            ],
            [
                'name' => 'sal',
                'a' => 0,
                'b' => 0,
            ]
        ];

        foreach ($calibrate as $key => $value) {
            Calibrate::create($value);
        }
    }
}
