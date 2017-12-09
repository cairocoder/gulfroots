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
        DB::table('filters')->insert(['name' => 'السعودية', 'group_id' => '1']);
        DB::table('filters')->insert(['name' => 'مصر', 'group_id' => '1']);

        DB::table('filters')->insert(['name' => 'الاسكندرية', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'القاهره', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'جده', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'المدينة', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'الحائل', 'group_id' => '2']);

        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه عادية', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه مميزة', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه عاجلة', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'اعلانات مدفوعه ملونة', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'أفضل الاعلانات', 'group_id' => '3']);

        DB::table('filters')->insert(['name' => 'غرفه واحده', 'group_id' => '5']);
        DB::table('filters')->insert(['name' => 'غرفتان', 'group_id' => '5']);
        DB::table('filters')->insert(['name' => 'ثلاث غرف', 'group_id' => '5']);
        DB::table('filters')->insert(['name' => 'أربعة غرف', 'group_id' => '5']);
        DB::table('filters')->insert(['name' => 'خمس غرف', 'group_id' => '5']);

        DB::table('filters')->insert(['name' => 'جديد', 'group_id' => '11']);
        DB::table('filters')->insert(['name' => 'مستعمل', 'group_id' => '11']);
    }
}
