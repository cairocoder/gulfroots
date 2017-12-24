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
        DB::table('filters')->insert(['name' => 'السعودية', 'values' => '
        الرّياض,
         جدة,
          مكة المُكرمة,
           المدينة المنورة,
           الأحساء,
            الطائف,
             خميس مشيط,
              حائل,
               حفر الباطن,
                الجبيل,
                 الخرج,
                  أبها,
                   الدّمام,
                    نجران,
                     بريدة,
                      ينبع,
                       تبوك,
                        القنفذة,
                         القطيف,
                          جازان', 'group_id' => '1']);
        
        DB::table('filters')->insert(['name' => 'بالساعة', 'type' => '', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'شهري', 'type' => '', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'سنوي', 'type' => '', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'سنوي + عمولة', 'type' => '', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'عمولة فقط', 'type' => '', 'group_id' => '2']);
        DB::table('filters')->insert(['name' => 'غير مدفوع', 'type' => '', 'group_id' => '2']);
        
        DB::table('filters')->insert(['name' => 'دوام كامل', 'type' => '', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'أوقات محددة', 'type' => '', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'بالساعة', 'type' => '', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'مرة واحدة', 'type' => '', 'group_id' => '3']);
        DB::table('filters')->insert(['name' => 'تطوع', 'type' => '', 'group_id' => '3']);
        

        DB::table('filters')->insert(['name' => 'ساري', 'values' => '', 'group_id' => '4']);
        DB::table('filters')->insert(['name' => 'منتهي', 'values' => '', 'group_id' => '4']);
        
        DB::table('filters')->insert(['name' => 'كيا', 'values' => '', 'group_id' => '5']);
        DB::table('filters')->insert(['name' => 'كيا', 'values' => '', 'group_id' => '5']);

        DB::table('filters')->insert(['name' => 'موديل', 'values' => '', 'group_id' => '6']);

        DB::table('filters')->insert(['name' => 'أبيض', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'أسود', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'أخضر', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'أحمر', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'أزرق', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'بنفسجي', 'values' => '', 'group_id' => '7']);
        DB::table('filters')->insert(['name' => 'بودري', 'values' => '', 'group_id' => '7']);

        // DB::table('filters')->insert(['name' => 'سعة المحرك', 'type' => '', 'group_id' => '8']);

        DB::table('filters')->insert(['name' => 'أوتوماتيك', 'values' => '', 'group_id' => '9']);
        DB::table('filters')->insert(['name' => 'مانيوال', 'values' => '', 'group_id' => '9']);
        DB::table('filters')->insert(['name' => 'غاز', 'type' => '', 'group_id' => '10']);
        DB::table('filters')->insert(['name' => 'بنزين', 'type' => '', 'group_id' => '10']);

        // DB::table('filters')->insert(['name' => 'موجودة', 'type' => '', 'group_id' => '11']);
        // DB::table('filters')->insert(['name' => 'ليست موجوة', 'type' => '', 'group_id' => '11']);

        DB::table('filters')->insert(['name' => 'جر أمامي', 'type' => '', 'group_id' => '12']);
        DB::table('filters')->insert(['name' => 'جر خلفي', 'type' => '', 'group_id' => '12']);
        
        DB::table('filters')->insert(['name' => 'مفروشة', 'type' => '', 'group_id' => '13']);
        DB::table('filters')->insert(['name' => 'عادية', 'type' => '', 'group_id' => '13']);
        DB::table('filters')->insert(['name' => 'عدد الغرف', 'values' => '', 'group_id' => '14']);
        DB::table('filters')->insert(['name' => 'عدد الأفراد', 'values' => '', 'group_id' => '15']);
        DB::table('filters')->insert(['name' => 'الحمامات', 'values' => '', 'group_id' => '16']);
        DB::table('filters')->insert(['name' => 'الاستقبال', 'values' => '', 'group_id' => '17']);

        DB::table('filters')->insert(['name' => 'علوي', 'type' => '', 'group_id' => '18']);
        DB::table('filters')->insert(['name' => 'أرضي', 'type' => '', 'group_id' => '18']);
        

    }
}
