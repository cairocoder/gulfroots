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
        DB::table('categories')->insert(['name' => 'الدراجات النارية', 'sub_id'=>'1']);
        //
        DB::table('categories')->insert(['name' => 'الدراجات المائية', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'الزوارق والتجديف', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'الزوارق السريعه والبخارية', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'زوارق الشراع', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'القوارب البلاسيكية وقوارب التجول', 'sub_id'=>'2']);
        DB::table('categories')->insert(['name' => 'اكسسوارات وقطع غيار للقوارب', 'sub_id'=>'2']);
        //
        DB::table('categories')->insert(['name' => 'حامل اطفال', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'الاستحمام', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'اسرة اطفال', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'تغذية', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'ملابس الرضع', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'ملابس اطفال', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'ملابس الامومة', 'sub_id'=>'3']);
        DB::table('categories')->insert(['name' => 'اللعب - داخلي', 'sub_id'=>'3']);
        //
        DB::table('categories')->insert(['name' => 'اكسسوارات', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'حقائب', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'عطور', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'مستحضرات العناية بالجسم', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'مستحضرات تجميلية', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'مجوهرات', 'sub_id'=>'4']);
        DB::table('categories')->insert(['name' => 'ملابس رجالية', 'sub_id'=>'4']);
        //
        DB::table('categories')->insert(['name' => 'فنادق', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'شقق مفروشة', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'وكالات سياحية', 'sub_id'=>'5']);
        DB::table('categories')->insert(['name' => 'رحلات جماعية', 'sub_id'=>'5']);
        //
        DB::table('categories')->insert(['name' => 'مطاعم وكوفيهات', 'sub_id'=>'6']);
        DB::table('categories')->insert(['name' => 'مخابز وحلويات', 'sub_id'=>'6']);
        DB::table('categories')->insert(['name' => 'عربات الطعام', 'sub_id'=>'6']);
        //
        DB::table('categories')->insert(['name' => 'فعاليات و معارض', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'الانشطة والهوايات', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'تخييم وتنزه', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'العمل التطوعي', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'الصفوف المهارية والتعليمية', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'مدربين شخصيين', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'مأكولات من المنزل', 'sub_id'=>'7']);
        DB::table('categories')->insert(['name' => 'التبادل اللغوي', 'sub_id'=>'7']);
        //
        DB::table('categories')->insert(['name' => 'كتب اطفال', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'كتب اسلامية', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'الروايات', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'روايات مصورة', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'مجلات', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'تطوير الذات', 'sub_id'=>'8']);
        DB::table('categories')->insert(['name' => 'الكتب الدراسية', 'sub_id'=>'8']);
        //
        DB::table('categories')->insert(['name' => 'محاسبة', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'مساعد اداري', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'سكرتارية', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'الاستقبال', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'كاتب وصحفي', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'مخطط مالي', 'sub_id'=>'9']);
        DB::table('categories')->insert(['name' => 'اداره الاموال والثروات', 'sub_id'=>'9']);
        //
        DB::table('categories')->insert(['name' => 'الحافلات والقطارات والطائرة', 'sub_id'=>'10']);
        DB::table('categories')->insert(['name' => 'فعاليات ومعارض', 'sub_id'=>'10']);
        DB::table('categories')->insert(['name' => 'رياضة', 'sub_id'=>'10']);
        DB::table('categories')->insert(['name' => 'تذاكر أخري', 'sub_id'=>'10']);
        //
        DB::table('categories')->insert(['name' => 'الاجهزة', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'مواد بناء والادوات الصحية', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'اثاث المنزل', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'حديقة', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'ديكور المنزل', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'مطبخ وغرفة الطعام', 'sub_id'=>'11']);
        DB::table('categories')->insert(['name' => 'اضاءه', 'sub_id'=>'11']);
        //
        DB::table('categories')->insert(['name' => 'التحف', 'sub_id'=>'12']);
        DB::table('categories')->insert(['name' => 'فنون', 'sub_id'=>'12']);
        DB::table('categories')->insert(['name' => 'مقتنيات', 'sub_id'=>'12']);
        DB::table('categories')->insert(['name' => 'أخري', 'sub_id'=>'12']);
        //
        DB::table('categories')->insert(['name' => 'صوتيات', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'كاميرات', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'كمبيوتر وبرامج', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'أجهزه الكمبيوتر', 'sub_id'=>'13']);
        DB::table('categories')->insert(['name' => 'أخري', 'sub_id'=>'13']);
        //
        DB::table('categories')->insert(['name' => 'تأجير', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'السيارات', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'الححضانة ورعاية الاطفال', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'خدمات النقل والتوصيل', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'الحفلات و حفلات الزفاف', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'التصوير الفوتوغرافي والفيديو', 'sub_id'=>'14']);
        DB::table('categories')->insert(['name' => 'الخياطين ومشاغل الخياطة', 'sub_id'=>'14']);
        //
        DB::table('categories')->insert(['name' => 'اراضي للبيع', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'الاعمال التجارية للبيع', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'مكاتب ادارية ومعارض تجارية', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'مستودعات ومخازن', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'عقارللبيع', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'عقار للايجار', 'sub_id'=>'15']);
        DB::table('categories')->insert(['name' => 'استراحات وشاليهات للايجار', 'sub_id'=>'15']);
        //
        DB::table('categories')->insert(['name' => 'دراجات', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'الملاكمة وفنون الدفاع عن النفس', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'رحلات بريه', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'صيد السمك والغوص', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'جولف وتنس', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'صالات الألعاب الرياضية و اللياقة', 'sub_id'=>'16']);
        DB::table('categories')->insert(['name' => 'المكملات الغذائية والبروتينات', 'sub_id'=>'16']);
        //
        DB::table('categories')->insert(['name' => 'الطيور', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'القطط', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'الكلاب والجراء', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'سمك', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'الخيول و المهور', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'مواشى', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'الارانب', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'الزواحف والبرمائيات', 'sub_id'=>'17']);
        DB::table('categories')->insert(['name' => 'أخري', 'sub_id'=>'17']);
        for($i = 19; $i <= 120; $i++){
            for($j = 1; $j <= 5; $j++){
                DB::table('categories_filters_groups')->insert(['categories_id' => $i, 'filters_groups_id' =>$j]);
            }
        }
    }
}
