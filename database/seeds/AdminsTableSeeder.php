<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('admins')->insert(['name' => 'test', 'email' => 'test@test.com', 'password' => bcrypt('123456'), 'group_id' => '1']);
    }
}
