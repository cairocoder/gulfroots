<?php

use Illuminate\Database\Seeder;

class FiltersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('filters')->insert(['name' => 'asd', 'type' => 'adsa', 'value_start' => '1', 'value_end' => '1']);
    }
}
