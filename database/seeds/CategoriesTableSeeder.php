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
        // Category 1 level 1
        DB::table('categories')->insert(['name' => 'السيارات و المركبات', 'slug' => 'سيارات', 'icon' =>'car', 'photo' => 'front-assets/images/bigcat7.jpg']); // id = 1
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'السيارات وعربات تخييم', 'sub_id'=>'1']); // id = 2
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'سيارات وعربات النقل', 'sub_id'=>'2']); // id = 3
        DB::table('categories')->insert(['name' => 'المقطورات', 'sub_id'=>'2']); // id = 4
        DB::table('categories')->insert(['name' => 'عربات سكنية', 'sub_id'=>'2']); // id = 5
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'سيارات البناء ومعدات', 'sub_id'=>'1']); // id = 6
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'ادوات البناء', 'sub_id'=>'6']); // id = 7
        DB::table('categories')->insert(['name' => 'مركبات البناء', 'sub_id'=>'6']); // id = 8
        DB::table('categories')->insert(['name' => 'معدات وسيارات البناء', 'sub_id'=>'6']); // id = 9
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'معدات وسيارات الزراعة', 'sub_id'=>'1']); // id = 10
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'معدات وماكينات زراعية', 'sub_id'=>'10']); // id = 11
        DB::table('categories')->insert(['name' => 'الزراعة والمركبات', 'sub_id'=>'10']); // id = 12
        DB::table('categories')->insert(['name' => 'سيارات زراعية ومعدات اخري', 'sub_id'=>'10']); // id = 13
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'الدراجات النارية ودراجات', 'sub_id'=>'1']); // id = 14
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'دراجات نارية', 'sub_id'=>'14']); // id = 15
        DB::table('categories')->insert(['name' => 'الدراجات الرباعية', 'sub_id'=>'14']); // id = 16
        DB::table('categories')->insert(['name' => 'الدراجات البخارية', 'sub_id'=>'14']); // id = 17
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'قطع غيار واكسسوارات', 'sub_id'=>'1']); // id = 18
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'الصوتيات واجهزة الانذار', 'sub_id'=>'18']); // id = 19
        DB::table('categories')->insert(['name' => 'ملاحة السيارات واجهزة الرحلات و البر', 'sub_id'=>'18']); // id = 20
        DB::table('categories')->insert(['name' => 'اجزاء جسم السيارات', 'sub_id'=>'18']); // id = 21
        DB::table('categories')->insert(['name' => 'الاطارات والجنوط', 'sub_id'=>'18']); // id = 22
        DB::table('categories')->insert(['name' => 'اكسسوارات', 'sub_id'=>'18']); // id = 23
        DB::table('categories')->insert(['name' => 'اكسسوارات دراجة نارية ورباعية', 'sub_id'=>'18']); // id = 24
        DB::table('categories')->insert(['name' => 'قطع غيار محركات النقل', 'sub_id'=>'18']); // id = 25
        DB::table('categories')->insert(['name' => 'قطع غيار الدراجات النارية ورباعية', 'sub_id'=>'18']); // id = 26
        DB::table('categories')->insert(['name' => 'قطع غيار الشاحنات', 'sub_id'=>'18']); // id = 27
        DB::table('categories')->insert(['name' => 'قطع غيار واكسسوارات اخري', 'sub_id'=>'18']); // id = 28
        DB::table('categories')->insert(['name' => 'مقطورة', 'sub_id'=>'18']); // id = 29
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'تشليح', 'sub_id'=>'1']); // id = 30
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'الشاحنات', 'sub_id'=>'1']); // id = 31
        // Category 1 level 3
        DB::table('categories')->insert(['name' => 'الشاحنات', 'sub_id'=>'31']); // id = 32
        // Category 1 level 2
        DB::table('categories')->insert(['name' => 'محركات النقل الاخري', 'sub_id'=>'1']); // id = 33



        // Category 2 level 1
        DB::table('categories')->insert(['name' => 'قوارب والدراجات المائية', 'slug' => 'قوارب', 'icon' =>'ship', 'photo' => 'front-assets/images/bigcat8.jpg']); // id = 34
        // Category 2 level 2
        DB::table('categories')->insert(['name' => 'الدراجات المائية', 'sub_id'=>'34']); // id = 35
        DB::table('categories')->insert(['name' => 'الزوارق والتجديف', 'sub_id'=>'34']); // id = 36
        DB::table('categories')->insert(['name' => 'الزوارق السريعة والبخارية', 'sub_id'=>'34']); // id = 37
        DB::table('categories')->insert(['name' => 'زوارق الشراع', 'sub_id'=>'34']); // id = 38
        DB::table('categories')->insert(['name' => 'القوارب البلاستيكية وقوارب التجول', 'sub_id'=>'34']); // id = 39
        DB::table('categories')->insert(['name' => 'اكسسوارات وقطع غيار للقوارب والدراجات المائية', 'sub_id'=>'34']); // id = 40
        DB::table('categories')->insert(['name' => 'الزوارق والدراجات المائية الاخرى', 'sub_id'=>'34']); // id = 41
        
        


        // Category 3 level 1
        DB::table('categories')->insert(['name' => 'اطفال ورضع', 'slug' => 'اطفال','icon' =>'child', 'photo' => 'front-assets/images/bigcat9.jpg']); // id = 42
        // Category 3 level 2
        DB::table('categories')->insert(['name' => 'حامل اطفال', 'sub_id'=>'42']); // id = 43
        DB::table('categories')->insert(['name' => 'الاستحمام', 'sub_id'=>'42']); // id = 44
        DB::table('categories')->insert(['name' => 'اسرة اطفال', 'sub_id'=>'42']); // id = 45
        DB::table('categories')->insert(['name' => 'تغذية', 'sub_id'=>'42']); // id = 46
        DB::table('categories')->insert(['name' => 'ملابس الرضع', 'sub_id'=>'42']); // id = 47
        DB::table('categories')->insert(['name' => 'ملابس اطفال', 'sub_id'=>'42']); // id = 48
        DB::table('categories')->insert(['name' => 'ملابس الامومة', 'sub_id'=>'42']); // id = 49
        DB::table('categories')->insert(['name' => 'اللعب – داخلي', 'sub_id'=>'42']); // id = 50
        DB::table('categories')->insert(['name' => 'اللعب – في الخارج', 'sub_id'=>'42']); // id = 51
        DB::table('categories')->insert(['name' => 'عربات الاطفال', 'sub_id'=>'42']); // id = 52
        DB::table('categories')->insert(['name' => 'اطفال ورضع اخري', 'sub_id'=>'42']); // id = 53
        DB::table('categories')->insert(['name' => 'امان وسلامة', 'sub_id'=>'42']); // id = 54
        // Category 3 level 3
        DB::table('categories')->insert(['name' => 'مقاعد السيارة', 'sub_id'=>'54']); // id = 55
        DB::table('categories')->insert(['name' => 'اجهزة المراقبة', 'sub_id'=>'54']); // id = 56
        DB::table('categories')->insert(['name' => 'حواجز وبوابات امان الاطفال', 'sub_id'=>'54']); // id = 57
        DB::table('categories')->insert(['name' => 'الأمان والسلامة الأخرى', 'sub_id'=>'54']); // id = 58



        // Category 4 level 1
        DB::table('categories')->insert(['name' => 'الملابس والمجوهرات والمستحضرات', 'slug' => 'ملابس و مجوهرات','icon' =>'diamond' , 'photo' => 'front-assets/images/bigcat1.jpg']); // id = 59
        // Category 4 level 2
        DB::table('categories')->insert(['name' => 'اكسسوارات', 'sub_id'=>'59']); // id = 60
        DB::table('categories')->insert(['name' => 'حقائب', 'sub_id'=>'59']); // id = 61
        DB::table('categories')->insert(['name' => 'عطور', 'sub_id'=>'59']); // id = 62
        DB::table('categories')->insert(['name' => 'مستحضرات العناية بالجسم', 'sub_id'=>'59']); // id = 63
        DB::table('categories')->insert(['name' => 'مستحضرات تجميلية', 'sub_id'=>'59']); // id = 64
        DB::table('categories')->insert(['name' => 'مجوهرات', 'sub_id'=>'59']); // id = 65
        // Category 4 level 3
        DB::table('categories')->insert(['name' => 'ساعات', 'sub_id'=>'65']); // id = 66
        DB::table('categories')->insert(['name' => 'مجوهرات للرجال', 'sub_id'=>'65']); // id = 67
        DB::table('categories')->insert(['name' => 'مجوهرات نسائية', 'sub_id'=>'65']); // id = 68
        DB::table('categories')->insert(['name' => 'مجوهرات للجنسين', 'sub_id'=>'65']); // id = 69
        DB::table('categories')->insert(['name' => 'مجوهرات اخري', 'sub_id'=>'65']); // id = 70
        // Category 4 level 2
        DB::table('categories')->insert(['name' => 'ملابس رجالية', 'sub_id'=>'59']); // id = 71
        // Category 4 level 3
        DB::table('categories')->insert(['name' => 'ثياب ومشالح و دقلات', 'sub_id'=>'71']); // id = 72
        DB::table('categories')->insert(['name' => 'جاكيتات ومعاطف', 'sub_id'=>'71']); // id = 73
        DB::table('categories')->insert(['name' => 'البناطيل والجينز', 'sub_id'=>'71']); // id = 74
        DB::table('categories')->insert(['name' => 'ملابس رياضية', 'sub_id'=>'71']); // id = 75
        DB::table('categories')->insert(['name' => 'بلايز وقمصان وتي شيرت', 'sub_id'=>'71']); // id = 76
        DB::table('categories')->insert(['name' => 'احذية رجالية', 'sub_id'=>'71']); // id = 77
        // Category 4 level 2
        DB::table('categories')->insert(['name' => 'ملابس نسائية', 'sub_id'=>'59']); // id = 78
        // Category 4 level 3
        DB::table('categories')->insert(['name' => 'فساتين وتنانير', 'sub_id'=>'78']); // id = 79
        DB::table('categories')->insert(['name' => 'جاكيتات ومعاطف', 'sub_id'=>'78']); // id = 80
        DB::table('categories')->insert(['name' => 'البناطيل والجينز', 'sub_id'=>'78']); // id = 81
        DB::table('categories')->insert(['name' => 'الجوارب والملابس الداخلية', 'sub_id'=>'78']); // id = 82
        DB::table('categories')->insert(['name' => 'ملابس رياضية', 'sub_id'=>'78']); // id = 83
        DB::table('categories')->insert(['name' => 'بلايز وقمصان وتي شيرت', 'sub_id'=>'78']); // id = 84
        DB::table('categories')->insert(['name' => 'فساتين زواج', 'sub_id'=>'78']); // id = 85
        DB::table('categories')->insert(['name' => 'عبايات', 'sub_id'=>'78']); // id = 86
        DB::table('categories')->insert(['name' => 'جلابيات', 'sub_id'=>'78']); // id = 87
        DB::table('categories')->insert(['name' => 'ملابس نسائية اخري', 'sub_id'=>'78']); // id = 88
        DB::table('categories')->insert(['name' => 'احذية المرأة', 'sub_id'=>'78']); // id = 89




        // Category 5 level 1
        DB::table('categories')->insert(['name' => 'السفر و السياحة', 'slug' => 'سفر', 'icon' =>'ship', 'photo' => 'front-assets/images/bigcat10.jpg']); // id = 90
        // Category 5 level 2
        DB::table('categories')->insert(['name' => 'فنادق', 'sub_id'=>'90']); // id = 91
        DB::table('categories')->insert(['name' => 'شقق مفروشة', 'sub_id'=>'90']); // id = 92
        DB::table('categories')->insert(['name' => 'وكالات سياحية', 'sub_id'=>'90']); // id = 93
        DB::table('categories')->insert(['name' => 'رحلات جماعية', 'sub_id'=>'90']); // id = 94




        // Category 6 level 1
        DB::table('categories')->insert(['name' => 'مطاعم وكافيهات ومخبوزات', 'slug' => 'مطعم', 'icon' =>'cutlery', 'photo' => 'front-assets/images/bigcat11.jpg']); // id = 95
        // Category 6 level 2
        DB::table('categories')->insert(['name' => 'مطاعم وكافيه', 'sub_id'=>'95']); // id = 96
        DB::table('categories')->insert(['name' => 'مخابز وحلويات', 'sub_id'=>'95']); // id = 97
        DB::table('categories')->insert(['name' => 'عربات الطعام', 'sub_id'=>'95']); // id = 98
        DB::table('categories')->insert(['name' => 'مأكولات من المنزل', 'sub_id'=>'95']); // id = 99




        

        // Category 7 level 1
        DB::table('categories')->insert(['name' => 'المجتمع والترفية', 'slug' => 'مجتمع', 'icon' =>'users', 'photo' => 'front-assets/images/bigcat12.jpg']); // id = 100
        // Category 7 level 2
        DB::table('categories')->insert(['name' => 'فعاليات ومعارض', 'sub_id'=>'100']); // id = 101
        DB::table('categories')->insert(['name' => 'الانشطة والهوايات', 'sub_id'=>'100']); // id = 102
        DB::table('categories')->insert(['name' => 'العمل التطوعي', 'sub_id'=>'100']); // id = 103
        DB::table('categories')->insert(['name' => 'الصفوف المهارية والتعليمية', 'sub_id'=>'100']); // id = 104
        DB::table('categories')->insert(['name' => 'مدربين شخصيين', 'sub_id'=>'100']); // id = 105
        DB::table('categories')->insert(['name' => 'التبادل اللغوي', 'sub_id'=>'100']); // id = 106
        DB::table('categories')->insert(['name' => 'المفقودات والموجودات', 'sub_id'=>'100']); // id = 107
        DB::table('categories')->insert(['name' => 'شركاء الرياضة', 'sub_id'=>'100']); // id = 108
        DB::table('categories')->insert(['name' => 'اجتماعية وترفيه اخري', 'sub_id'=>'100']); // id = 109



        // Category 8 level 1
        DB::table('categories')->insert(['name' => 'كتب والعاب', 'slug' => 'كتب والعاب','icon' =>'book', 'pho8to' => 'front-assets/images/bigcat13.jpg']); // id = 110
        // Category 8 level 2
        DB::table('categories')->insert(['name' => 'كتب', 'sub_id'=>'110']); // id = 111
        // Category 8 level 3
        DB::table('categories')->insert(['name' => 'كتب اطفال', 'sub_id'=>'111']); // id = 112
        DB::table('categories')->insert(['name' => 'كتب اسلامية', 'sub_id'=>'111']); // id = 113
        DB::table('categories')->insert(['name' => 'الروايات', 'sub_id'=>'111']); // id = 114
        DB::table('categories')->insert(['name' => 'روايات مصورة', 'sub_id'=>'111']); // id = 115
        DB::table('categories')->insert(['name' => 'مجلات', 'sub_id'=>'111']); // id = 116
        DB::table('categories')->insert(['name' => 'تطوير الذات', 'sub_id'=>'111']); // id = 117
        DB::table('categories')->insert(['name' => 'الكتب الدراسية', 'sub_id'=>'111']); // id = 118
        DB::table('categories')->insert(['name' => 'الأدلة السياحية وادب الرحلات', 'sub_id'=>'111']); // id = 119
        DB::table('categories')->insert(['name' => 'كتب اخري', 'sub_id'=>'111']); // id = 120
        DB::table('categories')->insert(['name' => 'الاقراص المدمجة واقراص الفيديو الرقمية', 'sub_id'=>'111']); // id = 121
        // Category 8 level 2
        DB::table('categories')->insert(['name' => 'العاب الذكاء', 'sub_id'=>'110']); // id = 122





        // Category 9 level 1
        DB::table('categories')->insert(['name' => 'وظائف', 'slug' => 'وظيفه', 'icon' => 'briefcase', 'photo' => 'front-assets/images/bigcat14.jpg']); // id = 123
        // Category 9 level 2
        DB::table('categories')->insert(['name' => 'محاسبة', 'sub_id'=>'123']); // id = 124
        DB::table('categories')->insert(['name' => 'مساعد اداري', 'sub_id'=>'123']); // id = 125
        DB::table('categories')->insert(['name' => 'سكرتارية', 'sub_id'=>'123']); // id = 126
        DB::table('categories')->insert(['name' => 'الاستقبال', 'sub_id'=>'123']); // id = 127
        DB::table('categories')->insert(['name' => 'كاتب وصحفي', 'sub_id'=>'123']); // id = 128
        DB::table('categories')->insert(['name' => 'مخطط مالي', 'sub_id'=>'123']); // id = 129
        DB::table('categories')->insert(['name' => 'اداره الاموال والثروات', 'sub_id'=>'123']); // id = 130
        DB::table('categories')->insert(['name' => 'خدمة العملاء – مركز الاتصالات', 'sub_id'=>'123']); // id = 131
        DB::table('categories')->insert(['name' => 'المبيعات والتسويق - مركز اتصالات', 'sub_id'=>'123']); // id = 132
        DB::table('categories')->insert(['name' => 'المبيعات والتسويق – مقابلة العملاء', 'sub_id'=>'123']); // id = 133
        DB::table('categories')->insert(['name' => 'رعاية وتعليم كبار السن وذوي الاحتياجات الخاصة', 'sub_id'=>'123']); // id = 134
        DB::table('categories')->insert(['name' => 'مشرف او مقاول', 'sub_id'=>'123']); // id = 135
        DB::table('categories')->insert(['name' => 'مشغل الآلات', 'sub_id'=>'123']); // id = 136
        DB::table('categories')->insert(['name' => 'جرافيك ديزاين', 'sub_id'=>'123']); // id = 137
        DB::table('categories')->insert(['name' => 'هندسة معمارية', 'sub_id'=>'123']); // id = 138
        DB::table('categories')->insert(['name' => 'تصميم المواقع والتداخلات', 'sub_id'=>'123']); // id = 139
        DB::table('categories')->insert(['name' => 'التصميم الداخلي', 'sub_id'=>'123']); // id = 140
        DB::table('categories')->insert(['name' => 'رعاية الاطفال ورعاية ما بعد المدرسة', 'sub_id'=>'123']); // id = 141
        DB::table('categories')->insert(['name' => 'مدرسين', 'sub_id'=>'123']); // id = 142
        DB::table('categories')->insert(['name' => 'مهندس مركبات', 'sub_id'=>'123']); // id = 143
        DB::table('categories')->insert(['name' => 'مهندس خدمات البناء', 'sub_id'=>'123']); // id = 144
        DB::table('categories')->insert(['name' => 'هندسة ميكانيكية', 'sub_id'=>'123']); // id = 145
        DB::table('categories')->insert(['name' => 'مهندس كهربائي', 'sub_id'=>'123']); // id = 146
        DB::table('categories')->insert(['name' => 'الهندسة الزراعية وخدمات الزراعة', 'sub_id'=>'123']); // id = 147
        DB::table('categories')->insert(['name' => 'تدريب الحيوانات / مدرب', 'sub_id'=>'123']); // id = 148
        DB::table('categories')->insert(['name' => 'طبيب', 'sub_id'=>'123']); // id = 149
        DB::table('categories')->insert(['name' => 'سكرتير طبي', 'sub_id'=>'123']); // id = 150
        DB::table('categories')->insert(['name' => 'صيدلاني', 'sub_id'=>'123']); // id = 151
        DB::table('categories')->insert(['name' => 'العلاج الطبيعي واعادة التأهيل', 'sub_id'=>'123']); // id = 152
        DB::table('categories')->insert(['name' => 'مضيفي المأكولات والمشروبات', 'sub_id'=>'123']); // id = 153
        DB::table('categories')->insert(['name' => 'طباخين', 'sub_id'=>'123']); // id = 154
        DB::table('categories')->insert(['name' => 'مرشد سياحي', 'sub_id'=>'123']); // id = 155
        DB::table('categories')->insert(['name' => 'مطور/ مبرمج تقنية المعلومات والاتصالات', 'sub_id'=>'123']); // id = 156
        DB::table('categories')->insert(['name' => 'الدعم التقني والمساندة', 'sub_id'=>'123']); // id = 157
        DB::table('categories')->insert(['name' => 'محلل انظمة / اعمال', 'sub_id'=>'123']); // id = 158
        DB::table('categories')->insert(['name' => 'منتج ومطور مواقع', 'sub_id'=>'123']); // id = 159
        DB::table('categories')->insert(['name' => 'محامون ومستشارون', 'sub_id'=>'123']); // id = 160
        DB::table('categories')->insert(['name' => 'السكرتارية القانونية', 'sub_id'=>'123']); // id = 161
        DB::table('categories')->insert(['name' => 'سائقين', 'sub_id'=>'123']); // id = 162
        DB::table('categories')->insert(['name' => 'اداره الفعاليات / مدير فعاليات', 'sub_id'=>'123']); // id = 163
        DB::table('categories')->insert(['name' => 'مصورين', 'sub_id'=>'123']); // id = 164
        DB::table('categories')->insert(['name' => 'العلاقات العامة', 'sub_id'=>'123']); // id = 165
        DB::table('categories')->insert(['name' => 'مستشار واختصاصين موارد بشريه', 'sub_id'=>'123']); // id = 166
        DB::table('categories')->insert(['name' => 'التدريب والتطوير / مدرب مطور مهارات', 'sub_id'=>'123']); // id = 167
        DB::table('categories')->insert(['name' => 'مدرب رياضي', 'sub_id'=>'123']); // id = 168
        DB::table('categories')->insert(['name' => 'فني التكيف والتبريد', 'sub_id'=>'123']); // id = 169
        DB::table('categories')->insert(['name' => 'الخبازين وصانعي الحلويات', 'sub_id'=>'123']); // id = 170
        DB::table('categories')->insert(['name' => 'الجزارين', 'sub_id'=>'123']); // id = 171
        DB::table('categories')->insert(['name' => 'النجارين وصانعي الخزائن', 'sub_id'=>'123']); // id = 172
        DB::table('categories')->insert(['name' => 'التنظيف وعاملات المنزل', 'sub_id'=>'123']); // id = 173
        DB::table('categories')->insert(['name' => 'كهربائي', 'sub_id'=>'123']); // id = 174
        DB::table('categories')->insert(['name' => 'منسق زهور', 'sub_id'=>'123']); // id = 175
        DB::table('categories')->insert(['name' => 'كوافيره', 'sub_id'=>'123']); // id = 176
        DB::table('categories')->insert(['name' => 'عامل', 'sub_id'=>'123']); // id = 177
        DB::table('categories')->insert(['name' => 'حلاق', 'sub_id'=>'123']); // id = 178
        DB::table('categories')->insert(['name' => 'ميك اب ارتست', 'sub_id'=>'123']); // id = 179
        DB::table('categories')->insert(['name' => 'جليسة اطفال ومربية اطفال', 'sub_id'=>'123']); // id = 180
        DB::table('categories')->insert(['name' => 'خطاط وكاتب لوحات', 'sub_id'=>'123']); // id = 181
        DB::table('categories')->insert(['name' => 'سباك', 'sub_id'=>'123']); // id = 182
        DB::table('categories')->insert(['name' => 'دهان', 'sub_id'=>'123']); // id = 183
        DB::table('categories')->insert(['name' => 'عامل ديكور وجبس', 'sub_id'=>'123']); // id = 184
        DB::table('categories')->insert(['name' => 'حارس أمن', 'sub_id'=>'123']); // id = 185
        DB::table('categories')->insert(['name' => 'خياط', 'sub_id'=>'123']); // id = 186
        DB::table('categories')->insert(['name' => 'وظائف اخرى', 'sub_id'=>'123']); // id = 187




        // Category 10 level 1
        DB::table('categories')->insert(['name' => 'تذاكر', 'slug' => 'تذاكر', 'icon' => 'ticket', 'photo' => 'front-assets/images/bigcat5.jpg']); // id = 188
        // Category 10 level 2
        DB::table('categories')->insert(['name' => 'الحافلات والقطارات والطائرة', 'sub_id'=>'188']); // id = 189
        DB::table('categories')->insert(['name' => 'فعاليات ومعارض', 'sub_id'=>'188']); // id = 190
        DB::table('categories')->insert(['name' => 'رياضة', 'sub_id'=>'188']); // id = 191
        DB::table('categories')->insert(['name' => 'تذاكر اخري', 'sub_id'=>'188']); // id = 192




        // Category 11 level 1
        DB::table('categories')->insert(['name' => 'المنزل والحديقة', 'slug' => 'منزل','icon' =>'home', 'photo' => 'front-assets/images/bigcat2.jpg']); // id = 193
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'الاجهزة', 'sub_id'=>'193']); // id = 194
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'الخلاطات، عصارات', 'sub_id'=>'194']); // id = 195
        DB::table('categories')->insert(['name' => 'ماكينات القهوة', 'sub_id'=>'194']); // id = 196
        DB::table('categories')->insert(['name' => 'بوتاجازات وافران', 'sub_id'=>'194']); // id = 197
        DB::table('categories')->insert(['name' => 'غسالات الصحون', 'sub_id'=>'194']); // id = 198
        DB::table('categories')->insert(['name' => 'ثلاجات ومجمدات', 'sub_id'=>'194']); // id = 199
        DB::table('categories')->insert(['name' => 'تدفئة وتكييف', 'sub_id'=>'194']); // id = 200
        DB::table('categories')->insert(['name' => 'ميكروويف', 'sub_id'=>'194']); // id = 201
        DB::table('categories')->insert(['name' => 'غسالات ومجففات', 'sub_id'=>'194']); // id = 202
        DB::table('categories')->insert(['name' => 'الات الخياطة', 'sub_id'=>'194']); // id = 203
        DB::table('categories')->insert(['name' => 'اجهزة صغيرة', 'sub_id'=>'194']); // id = 204
        DB::table('categories')->insert(['name' => 'مكانس كهربائية', 'sub_id'=>'194']); // id = 205
        DB::table('categories')->insert(['name' => 'اجهزة اخري', 'sub_id'=>'194']); // id = 206
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'مواد بناء والادوات الصحية', 'sub_id'=>'193']); // id = 207
        DB::table('categories')->insert(['name' => 'اثاث المنزل', 'sub_id'=>'193']); // id = 208
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'الكراسي', 'sub_id'=>'208']); // id = 209
        DB::table('categories')->insert(['name' => 'أسرة', 'sub_id'=>'208']); // id = 210
        DB::table('categories')->insert(['name' => 'طاولات السرير', 'sub_id'=>'208']); // id = 211
        DB::table('categories')->insert(['name' => 'خزائن الكتب ورفوف', 'sub_id'=>'208']); // id = 212
        DB::table('categories')->insert(['name' => 'البوفيهات والطاولات الجانبية', 'sub_id'=>'208']); // id = 213
        DB::table('categories')->insert(['name' => 'وحدات التخزين', 'sub_id'=>'208']); // id = 214
        DB::table('categories')->insert(['name' => 'كراسي الطعام', 'sub_id'=>'208']); // id = 215
        DB::table('categories')->insert(['name' => 'طاولات قهوة', 'sub_id'=>'208']); // id = 216
        DB::table('categories')->insert(['name' => 'مكاتب', 'sub_id'=>'208']); // id = 217
        DB::table('categories')->insert(['name' => 'تسريحه وادراج', 'sub_id'=>'208']); // id = 218
        DB::table('categories')->insert(['name' => 'وحدات تلفاز وترفيه', 'sub_id'=>'208']); // id = 219
        DB::table('categories')->insert(['name' => 'مرايا', 'sub_id'=>'208']); // id = 220
        DB::table('categories')->insert(['name' => 'كراسي مكتب', 'sub_id'=>'208']); // id = 221
        DB::table('categories')->insert(['name' => 'الارائك', 'sub_id'=>'208']); // id = 222
        DB::table('categories')->insert(['name' => 'طاولات الطعام', 'sub_id'=>'208']); // id = 223
        DB::table('categories')->insert(['name' => 'خزائن', 'sub_id'=>'208']); // id = 224
        DB::table('categories')->insert(['name' => 'اثاث اخري', 'sub_id'=>'208']); // id = 225
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'حديقة', 'sub_id'=>'193']); // id = 226
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'الات وادوات الشواء', 'sub_id'=>'226']); // id = 227
        DB::table('categories')->insert(['name' => 'الات جز العشب', 'sub_id'=>'226']); // id = 228
        DB::table('categories')->insert(['name' => 'اثاث الحديقة والاسترخاء', 'sub_id'=>'226']); // id = 229
        DB::table('categories')->insert(['name' => 'اثاث طعام خارجي', 'sub_id'=>'226']); // id = 230
        DB::table('categories')->insert(['name' => 'المظلات والسواتر', 'sub_id'=>'226']); // id = 231
        DB::table('categories')->insert(['name' => 'النباتات', 'sub_id'=>'226']); // id = 232
        DB::table('categories')->insert(['name' => 'حوض السباحة', 'sub_id'=>'226']); // id = 233
        DB::table('categories')->insert(['name' => 'احواض واوعية النباتات', 'sub_id'=>'226']); // id = 234
        DB::table('categories')->insert(['name' => 'ادوات تخزين', 'sub_id'=>'226']); // id = 235
        DB::table('categories')->insert(['name' => 'ادوات حديقة اخري', 'sub_id'=>'226']); // id = 236
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'ديكور المنزل', 'sub_id'=>'193']); // id = 237
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'الساعات', 'sub_id'=>'237']); // id = 238
        DB::table('categories')->insert(['name' => 'اكسسوارات ديكور', 'sub_id'=>'237']); // id = 239
        DB::table('categories')->insert(['name' => 'اطارت الصور', 'sub_id'=>'237']); // id = 240
        DB::table('categories')->insert(['name' => 'المزهريات والفازات', 'sub_id'=>'237']); // id = 241
        DB::table('categories')->insert(['name' => 'ستائر', 'sub_id'=>'237']); // id = 242
        DB::table('categories')->insert(['name' => 'سجاد', 'sub_id'=>'237']); // id = 243
        DB::table('categories')->insert(['name' => 'المفارش والمنسوجات', 'sub_id'=>'237']); // id = 244
        DB::table('categories')->insert(['name' => 'غيرها من ديكور المنزل', 'sub_id'=>'237']); // id = 245
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'مطبخ وغرفة الطعام', 'sub_id'=>'193']); // id = 246
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'مطابخ', 'sub_id'=>'246']); // id = 247
        DB::table('categories')->insert(['name' => 'اكسسوارات الطبخ', 'sub_id'=>'246']); // id = 248
        DB::table('categories')->insert(['name' => 'ادوات المائدة', 'sub_id'=>'246']); // id = 249
        DB::table('categories')->insert(['name' => 'اواني الطعام', 'sub_id'=>'246']); // id = 250
        DB::table('categories')->insert(['name' => 'الاواني والمقالي', 'sub_id'=>'246']); // id = 251
        DB::table('categories')->insert(['name' => 'ادوات مطبخ اخري', 'sub_id'=>'246']); // id = 252
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'إضاءة', 'sub_id'=>'193']); // id = 253
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'اضاءة الاسقف', 'sub_id'=>'253']); // id = 254
        DB::table('categories')->insert(['name' => 'اضاءة الارضية', 'sub_id'=>'253']); // id = 255
        DB::table('categories')->insert(['name' => 'إضاءة خارجية', 'sub_id'=>'253']); // id = 256
        DB::table('categories')->insert(['name' => 'مصابيح مكتب', 'sub_id'=>'253']); // id = 257
        DB::table('categories')->insert(['name' => 'إضاءة اخري', 'sub_id'=>'253']); // id = 258
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'عدد وادوات', 'sub_id'=>'193']); // id = 259
        // Category 11 level 3
        DB::table('categories')->insert(['name' => 'ادوات الحدائق', 'sub_id'=>'259']); // id = 260
        DB::table('categories')->insert(['name' => 'ادوات يدوية', 'sub_id'=>'259']); // id = 261
        DB::table('categories')->insert(['name' => 'سلالم', 'sub_id'=>'259']); // id = 262
        DB::table('categories')->insert(['name' => 'ادوات التخزين ومقاعد', 'sub_id'=>'259']); // id = 263
        DB::table('categories')->insert(['name' => 'ادوات كهربائية', 'sub_id'=>'259']); // id = 264
        DB::table('categories')->insert(['name' => 'عدد وادوات اخري', 'sub_id'=>'259']); // id = 265
        // Category 11 level 2
        DB::table('categories')->insert(['name' => 'باقي المنزل والحديقة', 'sub_id'=>'193']); // id = 266


        // Category 12 level 1
        DB::table('categories')->insert(['name' => 'التحف والفنون والمقتنيات', 'slug' => 'التحف','icon' =>'picture-o', 'photo' => 'front-assets/images/bigcat15.jpg']); // id = 267
        // Category 12 level 2
        DB::table('categories')->insert(['name' => 'التحف', 'sub_id'=>'267']); // id = 268
        DB::table('categories')->insert(['name' => 'فنون', 'sub_id'=>'267']); // id = 269
        DB::table('categories')->insert(['name' => 'مقتنيات', 'sub_id'=>'267']); // id = 270
        DB::table('categories')->insert(['name' => 'تحف وفنون ومقتنيات اخري', 'sub_id'=>'267']); // id = 271



        // Category 13 level 1
        DB::table('categories')->insert(['name' => 'الإلكترونيات و الكمبيوتر', 'slug' => 'الإلكترونيات', 'icon' => 'desktop', 'photo' => 'front-assets/images/bigcat16.jpg']); // id = 272
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'صوتيات', 'sub_id'=>'272']); // id = 273
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'سماعات الرأس وسماعات', 'sub_id'=>'273']); // id = 274
        DB::table('categories')->insert(['name' => 'MP3مشغلات', 'sub_id'=>'273']); // id = 275
        DB::table('categories')->insert(['name' => 'اجهزة الراديو واجهزة استقبال', 'sub_id'=>'273']); // id = 276
        DB::table('categories')->insert(['name' => 'مكبرات الصوت', 'sub_id'=>'273']); // id = 277
        DB::table('categories')->insert(['name' => 'انظمة ستيريو', 'sub_id'=>'273']); // id = 278
        DB::table('categories')->insert(['name' => 'الصوتيات الأخرى', 'sub_id'=>'273']); // id = 279
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'كاميرات', 'sub_id'=>'272']); // id = 280
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'كاميرات الحركة و GoPro', 'sub_id'=>'280']); // id = 281
        DB::table('categories')->insert(['name' => 'العدسات', 'sub_id'=>'280']); // id = 282
        DB::table('categories')->insert(['name' => 'ملحقات كاميرا رقمية', 'sub_id'=>'280']); // id = 283
        DB::table('categories')->insert(['name' => 'الكاميرات الرقمية المدمجة', 'sub_id'=>'280']); // id = 284
        DB::table('categories')->insert(['name' => 'SLRالرقمية', 'sub_id'=>'280']); // id = 285
        DB::table('categories')->insert(['name' => 'كاميرات الفيديو', 'sub_id'=>'280']); // id = 286
        DB::table('categories')->insert(['name' => 'اكسسوارات كاميرات الفيديو', 'sub_id'=>'280']); // id = 287
        DB::table('categories')->insert(['name' => 'كاميرات اخري', 'sub_id'=>'280']); // id = 288
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'كمبيوتر وبرامج', 'sub_id'=>'272']); // id = 289
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'المكونات', 'sub_id'=>'289']); // id = 290
        DB::table('categories')->insert(['name' => 'اجهزة الكمبيوتر المكتبية', 'sub_id'=>'289']); // id = 291
        DB::table('categories')->insert(['name' => 'اكسسوارات الكمبيوتر', 'sub_id'=>'289']); // id = 292
        DB::table('categories')->insert(['name' => 'اجهزة الكمبيوتر المحمولة', 'sub_id'=>'289']); // id = 293
        DB::table('categories')->insert(['name' => 'اجهزة المودم والموجهات', 'sub_id'=>'289']); // id = 294
        DB::table('categories')->insert(['name' => 'شاشات الكمبيوتر', 'sub_id'=>'289']); // id = 295
        DB::table('categories')->insert(['name' => 'طابعات وماسحات ضوئية', 'sub_id'=>'289']); // id = 296
        DB::table('categories')->insert(['name' => 'البرمجيات', 'sub_id'=>'289']); // id = 297
        DB::table('categories')->insert(['name' => 'سماعات الكمبيوتر', 'sub_id'=>'289']); // id = 298
        DB::table('categories')->insert(['name' => 'وحدات التخزين USB والهارد ديسك', 'sub_id'=>'289']); // id = 299
        DB::table('categories')->insert(['name' => 'كمبيوتر وبرامج اخري', 'sub_id'=>'289']); // id = 300
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'الالكترونيات واجهزة الكمبيوتر الأخرى', 'sub_id'=>'272']); // id = 301
        DB::table('categories')->insert(['name' => 'الهواتف', 'sub_id'=>'272']); // id = 302
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'ايفون', 'sub_id'=>'302']); // id = 303
        DB::table('categories')->insert(['name' => 'هواتف الاندرويد', 'sub_id'=>'302']); // id = 304
        DB::table('categories')->insert(['name' => 'الهواتف المنزلية', 'sub_id'=>'302']); // id = 305
        DB::table('categories')->insert(['name' => 'ملحقات الهاتف', 'sub_id'=>'302']); // id = 306
        DB::table('categories')->insert(['name' => 'الهواتف الأخري', 'sub_id'=>'302']); // id = 307
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'الاجهزة اللوحية والكتب الاليكتروني', 'sub_id'=>'272']); // id = 308
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'اجهزة الاندرويد اللوحية', 'sub_id'=>'308']); // id = 309
        DB::table('categories')->insert(['name' => 'الايباد', 'sub_id'=>'308']); // id = 310
        DB::table('categories')->insert(['name' => 'كندل وكتب اليكترونية', 'sub_id'=>'308']); // id = 311
        DB::table('categories')->insert(['name' => 'اكسسوارات الاجهزة اللوحية', 'sub_id'=>'308']); // id = 312
        DB::table('categories')->insert(['name' => 'الاجهزة اللوحية الأخرى', 'sub_id'=>'308']); // id = 313
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'مشغلات تلفزيونية ودي في دي', 'sub_id'=>'272']); // id = 314
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'تلفزيونات', 'sub_id'=>'314']); // id = 315
        DB::table('categories')->insert(['name' => 'مشغل فيديو', 'sub_id'=>'314']); // id = 316
        DB::table('categories')->insert(['name' => 'انظمة المسرح المنزلي', 'sub_id'=>'314']); // id = 317
        DB::table('categories')->insert(['name' => 'اكسسوارات تليفزيون', 'sub_id'=>'314']); // id = 318
        DB::table('categories')->insert(['name' => 'مشغلات الأخرى', 'sub_id'=>'314']); // id = 319
        // Category 13 level 2
        DB::table('categories')->insert(['name' => 'العاب الفيديو وملحقاتها', 'sub_id'=>'272']); // id = 320
        // Category 13 level 3
        DB::table('categories')->insert(['name' => 'بلاي ستيشن', 'sub_id'=>'320']); // id = 321
        DB::table('categories')->insert(['name' => 'اكس بوكس', 'sub_id'=>'320']); // id = 322
        DB::table('categories')->insert(['name' => 'وي', 'sub_id'=>'320']); // id = 323
        DB::table('categories')->insert(['name' => 'العاب اليكترونية', 'sub_id'=>'320']); // id = 324
        DB::table('categories')->insert(['name' => 'ملحقات الاجهزة', 'sub_id'=>'320']); // id = 325
        DB::table('categories')->insert(['name' => 'العاب الفيديو الأخرى', 'sub_id'=>'320']); // id = 326






        // Category 14 level 1
        DB::table('categories')->insert(['name' => 'خدمات و تأجير', 'slug' => 'خدمات', 'icon' => 'money', 'photo' => 'front-assets/images/bigcat6.jpg']); // id = 327
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'تأجير', 'sub_id'=>'327']); // id = 328
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'تأجير السيارات والمقطورات والحفارات', 'sub_id'=>'328']); // id = 329
        DB::table('categories')->insert(['name' => 'استئجار الاثاث والاجهزة', 'sub_id'=>'328']); // id = 330
        DB::table('categories')->insert(['name' => 'تأجير ادوات ومعدات', 'sub_id'=>'328']); // id = 331
        DB::table('categories')->insert(['name' => 'اخري', 'sub_id'=>'328']); // id = 332
        DB::table('categories')->insert(['name' => 'مكافحة الحشرات', 'sub_id'=>'328']); // id = 333
        DB::table('categories')->insert(['name' => 'تنظيف ونقل اثاث', 'sub_id'=>'328']); // id = 334
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'السيارات', 'sub_id'=>'327']); // id = 335
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'خدمات السيارات', 'sub_id'=>'335']); // id = 336
        DB::table('categories')->insert(['name' => 'الميكانيكا وكراجات', 'sub_id'=>'335']); // id = 337
        DB::table('categories')->insert(['name' => 'الطلاء واصلاح الجسم', 'sub_id'=>'335']); // id = 338
        DB::table('categories')->insert(['name' => 'خدمات السيارات الأخرى', 'sub_id'=>'335']); // id = 339
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'الحضانة ورعاية الأطفال', 'sub_id'=>'327']); // id = 340
        DB::table('categories')->insert(['name' => 'خدمات النقل والتوصيل', 'sub_id'=>'327']); // id = 341
        DB::table('categories')->insert(['name' => 'الحفلات وحفلات الزفاف', 'sub_id'=>'327']); // id = 342
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'منسقي الحفلات', 'sub_id'=>'342']); // id = 343
        DB::table('categories')->insert(['name' => 'مقدمي خدمات الضيافة', 'sub_id'=>'342']); // id = 344
        DB::table('categories')->insert(['name' => 'البوفيهات والولائم', 'sub_id'=>'342']); // id = 345
        DB::table('categories')->insert(['name' => 'فرق حفلات الاطفال', 'sub_id'=>'342']); // id = 346
        DB::table('categories')->insert(['name' => 'صالات وقاعات', 'sub_id'=>'342']); // id = 347
        DB::table('categories')->insert(['name' => 'مصورين المناسبات', 'sub_id'=>'342']); // id = 348
        DB::table('categories')->insert(['name' => 'أخرى', 'sub_id'=>'342']); // id = 349
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'التصوير الفوتوغرافي والفيديو', 'sub_id'=>'327']); // id = 350
        DB::table('categories')->insert(['name' => 'الخياطين ومشاغل الخياطة', 'sub_id'=>'327']); // id = 351
        DB::table('categories')->insert(['name' => 'الصحة واللياقة البدنية والجمال', 'sub_id'=>'327']); // id = 352
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'المراكز والعيادات الطبية', 'sub_id'=>'352']); // id = 353
        DB::table('categories')->insert(['name' => 'العلاجات البديلة', 'sub_id'=>'352']); // id = 354
        DB::table('categories')->insert(['name' => 'علاجات التجميل', 'sub_id'=>'352']); // id = 355
        DB::table('categories')->insert(['name' => 'تصفيف الشعر', 'sub_id'=>'352']); // id = 356
        DB::table('categories')->insert(['name' => 'التدليك وخدمات العناية بالجسم', 'sub_id'=>'352']); // id = 357
        DB::table('categories')->insert(['name' => 'الصحة واللياقة البدنية والجمال الأخرى', 'sub_id'=>'352']); // id = 358
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'البناء والعمارة', 'sub_id'=>'327']); // id = 359
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'التصميم الداخلي', 'sub_id'=>'359']); // id = 360
        DB::table('categories')->insert(['name' => 'تدفئة وتكييف', 'sub_id'=>'359']); // id = 361
        DB::table('categories')->insert(['name' => 'البناء الحجري والقرميد', 'sub_id'=>'359']); // id = 362
        DB::table('categories')->insert(['name' => 'نجارة', 'sub_id'=>'359']); // id = 363
        DB::table('categories')->insert(['name' => 'مقاولين ومشرفين بناء', 'sub_id'=>'359']); // id = 364
        DB::table('categories')->insert(['name' => 'سباكة وكهرباء', 'sub_id'=>'359']); // id = 365
        DB::table('categories')->insert(['name' => 'بارع في كل الصنع', 'sub_id'=>'359']); // id = 366
        DB::table('categories')->insert(['name' => 'الطلاء والديكور', 'sub_id'=>'359']); // id = 367
        DB::table('categories')->insert(['name' => 'التجصيص والتبليط', 'sub_id'=>'359']); // id = 368
        DB::table('categories')->insert(['name' => 'كشف تسربات المياه', 'sub_id'=>'359']); // id = 369
        DB::table('categories')->insert(['name' => 'باقي قطاع التشييد والبناء', 'sub_id'=>'359']); // id = 370
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'الكمبيوتر والاتصالات وتقنية المعلومات', 'sub_id'=>'327']); // id = 371
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'اصلاح الكمبيوتر والهاتف', 'sub_id'=>'371']); // id = 372
        DB::table('categories')->insert(['name' => 'الجرافيك وتصميم المواقع', 'sub_id'=>'371']); // id = 373
        DB::table('categories')->insert(['name' => 'التسويق عبر الانترنت', 'sub_id'=>'371']); // id = 374
        DB::table('categories')->insert(['name' => 'تطوير الشبكة', 'sub_id'=>'371']); // id = 375
        DB::table('categories')->insert(['name' => 'باقي الحاسوب والاتصالات', 'sub_id'=>'371']); // id = 376
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'تنسيق وتخطيط الحدائق', 'sub_id'=>'327']); // id = 377
        DB::table('categories')->insert(['name' => 'التعليم والتدريس', 'sub_id'=>'327']); // id = 378
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'الدورات والتدريب', 'sub_id'=>'378']); // id = 379
        DB::table('categories')->insert(['name' => 'الدروس الخصوصية لطلاب المدارس والجامعات', 'sub_id'=>'378']); // id = 380
        DB::table('categories')->insert(['name' => 'تعليم اللغة والارشاد', 'sub_id'=>'378']); // id = 381
        DB::table('categories')->insert(['name' => 'غيرها من التعليم والارشاد', 'sub_id'=>'378']); // id = 382
        DB::table('categories')->insert(['name' => 'خدمات الاعمال الأخرى', 'sub_id'=>'378']); // id = 383
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'خدمات الحيوانات الاليفة', 'sub_id'=>'327']); // id = 384
        // Category 14 level 3
        DB::table('categories')->insert(['name' => 'الطب البيطري', 'sub_id'=>'384']); // id = 385
        DB::table('categories')->insert(['name' => 'التنظيف والعناية', 'sub_id'=>'384']); // id = 386
        DB::table('categories')->insert(['name' => 'حضانة الحيوانات الاليفة', 'sub_id'=>'384']); // id = 387
        DB::table('categories')->insert(['name' => 'تدريب', 'sub_id'=>'384']); // id = 388
        DB::table('categories')->insert(['name' => 'خدمات الحيوانات الاليفة الأخرى', 'sub_id'=>'384']); // id = 389
        // Category 14 level 2
        DB::table('categories')->insert(['name' => 'خدمات التأمين', 'sub_id'=>'327']); // id = 390
        DB::table('categories')->insert(['name' => 'خدمات وتأجير الأخرى', 'sub_id'=>'327']); // id = 391




        // Category 15 level 1
        DB::table('categories')->insert(['name' => 'العقارات', 'slug' => 'عقار','icon' => 'building-o', 'photo' => 'front-assets/images/bigcat3.jpg']); // id = 392
        // Category 15 level 2
        DB::table('categories')->insert(['name' => 'الاعمال التجارية للبيع', 'sub_id'=>'392']); // id = 393
        DB::table('categories')->insert(['name' => 'مكاتب ادارية ومعارض تجارية', 'sub_id'=>'392']); // id = 394
        DB::table('categories')->insert(['name' => 'مستودعات ومخازن', 'sub_id'=>'392']); // id = 395
        DB::table('categories')->insert(['name' => 'اراضي للبيع', 'sub_id'=>'392']); // id = 396
        // Category 15 level 3
        DB::table('categories')->insert(['name' => 'اراضي سكنية', 'sub_id'=>'396']); // id = 397
        DB::table('categories')->insert(['name' => 'اراضي تجارية', 'sub_id'=>'396']); // id = 398
        DB::table('categories')->insert(['name' => 'اراضي زراعية', 'sub_id'=>'396']); // id = 399
        // Category 15 level 2
        DB::table('categories')->insert(['name' => 'عقار للبيع', 'sub_id'=>'392']); // id = 400
        // Category 15 level 3
        DB::table('categories')->insert(['name' => 'فلل', 'sub_id'=>'400']); // id = 401
        DB::table('categories')->insert(['name' => 'قصور', 'sub_id'=>'400']); // id = 402
        DB::table('categories')->insert(['name' => 'دبلكسات', 'sub_id'=>'400']); // id = 403
        DB::table('categories')->insert(['name' => 'شقق', 'sub_id'=>'400']); // id = 404
        DB::table('categories')->insert(['name' => 'عمائر وابراج', 'sub_id'=>'400']); // id = 405
        DB::table('categories')->insert(['name' => 'استراحات وشاليهات', 'sub_id'=>'400']); // id = 406
        DB::table('categories')->insert(['name' => 'مزارع', 'sub_id'=>'400']); // id = 407
        // Category 15 level 2
        DB::table('categories')->insert(['name' => 'عقار للإيجار', 'sub_id'=>'392']); // id = 408
        // Category 15 level 3
        DB::table('categories')->insert(['name' => 'فلل', 'sub_id'=>'408']); // id = 409
        DB::table('categories')->insert(['name' => 'قصور', 'sub_id'=>'408']); // id = 410
        DB::table('categories')->insert(['name' => 'دبلكسات', 'sub_id'=>'408']); // id = 411
        DB::table('categories')->insert(['name' => 'شقق', 'sub_id'=>'408']); // id = 412
        DB::table('categories')->insert(['name' => 'عمائر وابراج', 'sub_id'=>'408']); // id = 413
        // Category 15 level 2
        DB::table('categories')->insert(['name' => 'استراحات وشاليهات للإيجار', 'sub_id'=>'392']); // id = 414
        DB::table('categories')->insert(['name' => 'غرف للإيجار', 'sub_id'=>'392']); // id = 415
        DB::table('categories')->insert(['name' => 'مشاركة المنزل', 'sub_id'=>'392']); // id = 416
        DB::table('categories')->insert(['name' => 'عقارات اخري', 'sub_id'=>'392']); // id = 417





        // Category 16 level 1
        DB::table('categories')->insert(['name' => 'الرياضة و اللياقة البدنية', 'slug' => 'الرياضة', 'icon' => 'futbol-o', 'photo' => 'front-assets/images/bigcat4.jpg']); // id = 418
        // Category 16 level 2
        DB::table('categories')->insert(['name' => 'دراجات', 'sub_id'=>'418']); // id = 419
        DB::table('categories')->insert(['name' => 'الملاكمة وفنون الدفاع عن النفس', 'sub_id'=>'418']); // id = 420
        DB::table('categories')->insert(['name' => 'صيد السمك والغوص', 'sub_id'=>'418']); // id = 421
        DB::table('categories')->insert(['name' => 'جولف وتنس', 'sub_id'=>'418']); // id = 422
        DB::table('categories')->insert(['name' => 'صالات الالعاب الرياضية واللياقة البدنية', 'sub_id'=>'418']); // id = 423
        DB::table('categories')->insert(['name' => 'المكملات الغذائية والبروتينات', 'sub_id'=>'418']); // id = 424
        DB::table('categories')->insert(['name' => 'لياقة ورياضة اخري', 'sub_id'=>'418']); // id = 425



        // Category 17 level 1
        DB::table('categories')->insert(['name' => 'الحيوانات الاليفة', 'slug' => 'حيوانات','icon' =>'paw', 'photo' => 'front-assets/images/bigcat17.jpg']); // id = 426
        // Category 16 level 2
        DB::table('categories')->insert(['name' => 'الطيور', 'sub_id'=>'426']); // id = 427
        DB::table('categories')->insert(['name' => 'القطط', 'sub_id'=>'426']); // id = 428
        DB::table('categories')->insert(['name' => 'الكلاب والجراء', 'sub_id'=>'426']); // id = 429
        DB::table('categories')->insert(['name' => 'سمك', 'sub_id'=>'426']); // id = 430
        DB::table('categories')->insert(['name' => 'الخيول والمهور', 'sub_id'=>'426']); // id = 431
        DB::table('categories')->insert(['name' => 'مواشي', 'sub_id'=>'426']); // id = 432
        DB::table('categories')->insert(['name' => 'الارانب', 'sub_id'=>'426']); // id = 433
        DB::table('categories')->insert(['name' => 'الزواحف والبرمائيات', 'sub_id'=>'426']); // id = 434
        DB::table('categories')->insert(['name' => 'حيوانات اليفه (فقدت / وجدت)', 'sub_id'=>'426']); // id = 435
        DB::table('categories')->insert(['name' => 'منتجات الحيوانات الاليفة', 'sub_id'=>'426']); // id = 436
        DB::table('categories')->insert(['name' => 'الحيوانات الاليفة الأخرى', 'sub_id'=>'426']); // id = 437

        // Category 18 level 1
        DB::table('categories')->insert(['name' => 'رحلات برية', 'slug' => 'رحلات','icon' =>'free-code-camp', 'photo' => 'front-assets/images/bigcat18.jpg']); // id = 438
        // Category 18 level 2
        DB::table('categories')->insert(['name' => 'تخييم وتنزه', 'sub_id'=>'438']); // id = 439
        DB::table('categories')->insert(['name' => 'رحلات بريه', 'sub_id'=>'438']); // id = 440

        // Category 19 level 1
        DB::table('categories')->insert(['name' => 'البضائع المتنوعة', 'slug' => 'بضائع','icon' =>'cubes', 'photo' => 'front-assets/images/bigcat19.jpg']); // id = 440
     
    }
}
