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
        // Main Categories
        DB::table('categories')->insert(['name' => 'السيارات و المركبات', 'slug' => 'سيارات', 'icon' =>'fa fa-car']); // id = 1
        DB::table('categories')->insert(['name' => 'قوارب والدراجات المائية', 'slug' => 'قوارب', 'icon' =>'fa fa-ship']); // id = 2
        DB::table('categories')->insert(['name' => 'اطفال ورضع', 'slug' => 'اطفال','icon' =>'fa fa-child']); // id = 3
        DB::table('categories')->insert(['name' => 'الملابس والمجوهرات والمستحضرات', 'slug' => 'ملابس و مجوهرات','icon' =>'fa fa-diamond']); // id = 4
        DB::table('categories')->insert(['name' => 'السفر و السياحة', 'slug' => 'سفر', 'icon' =>'fa fa-ship']); // id = 5
        DB::table('categories')->insert(['name' => 'مطاعم وكافيهات ومخبوزات', 'slug' => 'مطعم', 'icon' =>'fa fa-cutlery']); // id = 6
        DB::table('categories')->insert(['name' => 'المجتمع والترفية', 'slug' => 'مجتمع', 'icon' =>'fa fa-users']); // id = 7
        DB::table('categories')->insert(['name' => 'كتب والعاب', 'slug' => 'كتب والعاب','icon' =>'fa fa-book']); // id = 8
        DB::table('categories')->insert(['name' => 'وظائف', 'slug' => 'وظيفه', 'icon' => 'fa fa-briefcase']); // id = 9
        DB::table('categories')->insert(['name' => 'تذاكر', 'slug' => 'تذاكر', 'icon' => 'fa fa-ticket']); // id = 10
        DB::table('categories')->insert(['name' => 'المنزل والحديقة', 'slug' => 'منزل','icon' =>'fa fa-home']); // id = 11
        DB::table('categories')->insert(['name' => 'التحف والفنون والمقتنيات', 'slug' => 'التحف','icon' =>'fa fa-picture-o']); // id = 12
        DB::table('categories')->insert(['name' => 'الإلكترونيات و الكمبيوتر', 'slug' => 'الإلكترونيات', 'icon' => 'fa fa-desktop']); // id = 13
        DB::table('categories')->insert(['name' => 'خدمات و تأجير', 'slug' => 'خدمات', 'icon' => 'fa fa-money']); // id = 14
        DB::table('categories')->insert(['name' => 'العقارات', 'slug' => 'عقار','icon' => 'fa fa-building-o']); // id = 15
        DB::table('categories')->insert(['name' => 'الرياضة و اللياقة البدنية', 'slug' => 'الرياضة', 'icon' => 'fa fa-futbol-o']); // id = 16
        DB::table('categories')->insert(['name' => 'الحيوانات الاليفة', 'slug' => 'حيوانات','icon' =>'fa fa-paw']); // id = 17
        DB::table('categories')->insert(['name' => 'البضائع المتنوعة', 'slug' => 'بضائع','icon' =>'fa fa-cubes']); // id = 18
        //SubCategories
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
