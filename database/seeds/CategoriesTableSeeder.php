<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert(['name' => 'السيارات و المركبات', 'slug' => 'سيارات']);
        DB::table('categories')->insert(['name' => 'السفر و السياحة', 'slug' => 'سفر']);
        DB::table('categories')->insert(['name' => 'المنزل والحديقة', 'slug' => 'منزل']);
        DB::table('categories')->insert(['name' => 'وظائف', 'slug' => 'وظيفه']);
        DB::table('categories')->insert(['name' => 'العقارات', 'slug' => 'عقار']);
        DB::table('categories')->insert(['name' => 'خدمات و تأجير', 'slug' => 'خدمات']);
        DB::table('categories')->insert(['name' => 'الإلكترونيات و الكمبيوتر', 'slug' => 'الإلكترونيات']);
        DB::table('categories')->insert(['name' => 'الرياضة و اللياقة البدنية', 'slug' => 'الرياضة']);
        DB::table('categories')->insert(['name' => 'اخرى', 'slug' => 'أخري']);
        DB::table('categories')->insert(['name' => 'السيارات', 'sub_id'=>'1']);
        DB::table('categories')->insert(['name' => 'موتسكيلات', 'sub_id'=>'1']);
        DB::table('categories')->insert(['name' => 'تذاكر الطيران', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'الفنادق', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'المنازل', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'شقق', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'لاب توب', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'موبيل', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'جيم', 'sub_id'=>'6']);
        DB::table('categories')->insert(['name' => 'نوادى صحية', 'sub_id'=>'6']);
        DB::table('categories')->insert(['name' => 'تأجير سيارات', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'تاجير عدد', 'sub_id'=>'4']);
    }
}
