<?php

use Illuminate\Database\Seeder;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Packages Seeder
        DB::table('packages')->insert(['name' => 'Free', 'price' => '', 'description' => '', 'features' => '']);
        DB::table('packages')->insert(['name' => 'Additional', 'price' => '', 'description' => '', 'features' => '']);
        DB::table('packages')->insert(['name' => 'Special', 'price' => '', 'description' => '', 'features' => '']);
        DB::table('packages')->insert(['name' => 'Premium', 'price' => '', 'description' => '', 'features' => '']);
    }
}
