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
        DB::table('filters_groups')->insert(['group_name' => 'المكان', 'type' => 1]);// id = 1
        DB::table('filters_groups')->insert(['group_name' => 'نوع الاعلان', 'type' => 1]);// id = 2
        DB::table('filters_groups')->insert(['group_name' => 'نوع العرض', 'type' => 1]);// id = 3
        DB::table('filters_groups')->insert(['group_name' => 'الحالة', 'type' => 1]);// id = 4
        DB::table('filters_groups')->insert(['group_name' => 'نوع مقدم الطلب', 'type' => 1]);// id = 5
        DB::table('filters_groups')->insert(['group_name' => 'نوع الراتب', 'type' => 1]);// id = 6
        DB::table('filters_groups')->insert(['group_name' => 'نوع العمل', 'type' => 1]);// id = 7
        DB::table('filters_groups')->insert(['group_name' => 'الماركه', 'type' => 1]);// id = 8
        DB::table('filters_groups')->insert(['group_name' => 'الموديل', 'type' => 1]);// id = 9
        DB::table('filters_groups')->insert(['group_name' => 'تاريخ الصنع', 'type' => 1]);// id = 10
        DB::table('filters_groups')->insert(['group_name' => 'اللون', 'type' => 1]);// id = 11
        DB::table('filters_groups')->insert(['group_name' => 'نوع السياره', 'type' => 1]);// id = 12
    }
}
