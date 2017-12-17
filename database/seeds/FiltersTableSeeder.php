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
        DB::table('filters')->insert(['name' => 'جده - السعودية', 'group_id' => '1']);
        DB::table('filters')->insert(['name' => 'المدينة - السعودية', 'group_id' => '1']);
        DB::table('filters')->insert(['name' => 'الحائل - السعودية', 'group_id' => '1']);
        DB::table('filters')->insert(['name' => 'الاسكندرية - مصر', 'group_id' => '1']);
        DB::table('filters')->insert(['name' => 'القاهره - مصر', 'group_id' => '1']);

        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه عادية', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه مميزة', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه عاجلة', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه ملونة', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'أفضل الاعلانات', 'group_id' => '2']);

        DB::table('filters')->insert(['name' => 'عرض', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'طلب', 'group_id' => '3']);

        DB::table('filters')->insert(['name' => 'جديد', 'group_id' => '4']);
        DB::table('filters')->insert(['name' => 'مستعمل', 'group_id' => '4']);
    }
}
