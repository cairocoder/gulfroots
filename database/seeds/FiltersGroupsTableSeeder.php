<?php

use Illuminate\Database\Seeder;

class FiltersGroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('filters_groups')->insert(['group_name' => 'asd']);
    }
}
