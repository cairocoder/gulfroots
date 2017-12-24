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
        DB::table('filters_groups')->insert(['group_name' => 'الاماكن', 'type' => 4]);// id = 1
        
        DB::table('filters_groups')->insert(['group_name' => 'نوع الراتب', 'type' => 1]);// id = 2
        DB::table('filters_groups')->insert(['group_name' => 'نوع العمل', 'type' => 1]);// id = 3
        
        DB::table('filters_groups')->insert(['group_name' => 'الترخيص', 'type' => 5]);// id = 4
        DB::table('filters_groups')->insert(['group_name' => 'الماركة', 'type' => 4]);// id = 5
        DB::table('filters_groups')->insert(['group_name' => 'تاريخ الصنع', 'type' => 3]);// id = 6
        DB::table('filters_groups')->insert(['group_name' => 'اللون', 'type' => 1]);// id = 7
        DB::table('filters_groups')->insert(['group_name' => 'سعة المحرك', 'type' => 3]);// id = 8
        DB::table('filters_groups')->insert(['group_name' => 'ناقل الحركة', 'type' => 5]);// id = 9
        DB::table('filters_groups')->insert(['group_name' => 'نوع الوقود', 'type' => 5]);// id = 10
        DB::table('filters_groups')->insert(['group_name' => 'فتحة السقف', 'type' => 5]);// id = 11
        DB::table('filters_groups')->insert(['group_name' => 'نوع الجر', 'type' => 5]);// id = 12

        DB::table('filters_groups')->insert(['group_name' => 'نوع الشقة', 'type' => 5]);// id = 13
        DB::table('filters_groups')->insert(['group_name' => 'عدد الغرف', 'type' => 1]);// id = 14
        DB::table('filters_groups')->insert(['group_name' => 'عدد الأفراد', 'type' => 1]);// id = 15
        DB::table('filters_groups')->insert(['group_name' => 'الحمامات', 'type' => 1]);// id = 16
        DB::table('filters_groups')->insert(['group_name' => 'الاستقبال', 'type' => 1]);// id = 17
        DB::table('filters_groups')->insert(['group_name' => 'الطابق', 'type' => 5]);// id = 18
        DB::table('filters_groups')->insert(['group_name' => 'المساحة', 'type' => 3]);// id = 19
        
    }
}
