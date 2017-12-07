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
        DB::table('categories')->insert(['name' => 'السيارات و المركبات', 'slug' => 'سيارات', 'icon' =>'car']); // id = 1
        DB::table('categories')->insert(['name' => 'قوارب والدراجات المائية', 'slug' => 'قوارب', 'icon' =>'ship']); // id = 2
        DB::table('categories')->insert(['name' => 'اطفال ورضع', 'slug' => 'اطفال','icon' =>'child']); // id = 3
        DB::table('categories')->insert(['name' => 'الملابس والمجوهرات والمستحضرات', 'slug' => 'ملابس و مجوهرات','icon' =>'diamond']); // id = 4
        DB::table('categories')->insert(['name' => 'السفر و السياحة', 'slug' => 'سفر', 'icon' =>'ship']); // id = 5
        DB::table('categories')->insert(['name' => 'مطاعم وكافيهات ومخبوزات', 'slug' => 'مطعم', 'icon' =>'cutlery']); // id = 6
        DB::table('categories')->insert(['name' => 'المجتمع والترفية', 'slug' => 'مجتمع', 'icon' =>'users']); // id = 7
        DB::table('categories')->insert(['name' => 'كتب والعاب', 'slug' => 'كتب والعاب','icon' =>'book']); // id = 8
        DB::table('categories')->insert(['name' => 'وظائف', 'slug' => 'وظيفه', 'icon' => 'briefcase']); // id = 9
        DB::table('categories')->insert(['name' => 'تذاكر', 'slug' => 'تذاكر', 'icon' => 'ticket']); // id = 10
        DB::table('categories')->insert(['name' => 'المنزل والحديقة', 'slug' => 'منزل','icon' =>'home']); // id = 11
        DB::table('categories')->insert(['name' => 'التحف والفنون والمقتنيات', 'slug' => 'التحف','icon' =>'picture-o']); // id = 12
        DB::table('categories')->insert(['name' => 'الإلكترونيات و الكمبيوتر', 'slug' => 'الإلكترونيات', 'icon' => 'desktop']); // id = 13
        DB::table('categories')->insert(['name' => 'خدمات و تأجير', 'slug' => 'خدمات', 'icon' => 'money']); // id = 14
        DB::table('categories')->insert(['name' => 'العقارات', 'slug' => 'عقار','icon' => 'building-o']); // id = 15
        DB::table('categories')->insert(['name' => 'الرياضة و اللياقة البدنية', 'slug' => 'الرياضة', 'icon' => 'futbol-o']); // id = 16
        DB::table('categories')->insert(['name' => 'الحيوانات الاليفة', 'slug' => 'حيوانات','icon' =>'paw']); // id = 17
        DB::table('categories')->insert(['name' => 'البضائع المتنوعة', 'slug' => 'بضائع','icon' =>'cubes']); // id = 18
        //SubCategories
        DB::table('categories')->insert(['name' => 'السيارات', 'sub_id'=>'1']);
        DB::table('categories')->insert(['name' => 'موتسكيلات', 'sub_id'=>'1']);
        DB::table('categories')->insert(['name' => 'تذاكر الطيران', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'الفنادق', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'المنازل', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'شقق', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'لاب توب', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'موبيل', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'جيم', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'نوادى صحية', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'تأجير سيارات', 'sub_id'=>'14']);
    }
}
