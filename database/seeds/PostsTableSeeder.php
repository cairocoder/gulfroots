<?php

use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();
        //
        $list1 = collect([
            'الرّياض',
             'جدة',
              'مكة المُكرمة',
               'المدينة المنورة',
               'الأحساء',
                'الطائف',
                 'خميس مشيط',
                  'حائل',
                   'حفر الباطن',
                    'الجبيل',
                     'الخرج',
                      'أبها',
                       'الدّمام',
                        'نجران',
                         'بريدة',
                          'ينبع',
                           'تبوك',
                            'القنفذة',
                             'القطيف',
                              'جازان'
            ]);
        $list2 = collect(['جديد', 'مستعمل'
        ]);
        for($i = 1; $i <= 500; $i++) {
            $search_sentence = "";
            $post = App\Posts::create([
                'title' => 'منتج'. $i,
                'short_des' => $faker->realText(20),
                'long_des' => $faker->realText(200),
                'detailed_address' => $faker->address,
                'seller_name' => $faker->name,
                'seller_email' => $faker->email,
                'seller_contact_no' => $faker->phoneNumber,
                'price' => $faker->numberBetween(1000,2500),
                'sub_category_id' => $faker->numberBetween(19,50),
                'user_id' => $faker->numberBetween(1,20),
                'isArchived' => 0,
                'isApproved' => 1,
                'isinTop' => $faker->numberBetween(0, 1),
                'search_sentence' => "",
            ]);
            $search_sentence .= ' ' . $list1->random();
            $search_sentence .= ' ' . $list2->random();
            $ancestor = App\Categories::findorfail($post->sub_category_id);
            $search_sentence .= ' ' . $ancestor->name;
            while($ancestor->sub_id != null){
                $ancestor = App\Categories::findorfail($ancestor->sub_id);
                $search_sentence .= ' ' . $ancestor->name;
            }
            //add post_features
            if($i % 2){
                for($j = 0; $j < 1; $j++){
                    $tmp = App\PostFeatures::create([
                        'type' => $faker->numberBetween(1,2),
                        'post_id' => $i,
                        'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
                    ]);
                    if($tmp->type == 1){
                        $search_sentence .= ' paid isColored اعلانات مدفوعه ملونة';
                    }
                    if($tmp->type == 2){
                        $search_sentence .= ' paid isinMain اعلانات مدفوعه مميزة';
                    }
                }
            }else{
                for($j = 0; $j < 1; $j++){
                    $tmp = App\PostFeatures::create([
                        'type' => 5,
                        'post_id' => $i,
                        'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
                    ]);
                    $search_sentence .= ' isBreaking اعلانات مدفوعه عاجلة';
                }
            }
            if($post->isinTop = 1){
                App\PostFeatures::create([
                    'type' => 3,
                    'post_id' => $i,
                    'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
                ]);
                $search_sentence .= ' paid isinTop أفضل الاعلانات';
            }
            //add post filters
            $post->search_sentence = $search_sentence;
            $post->save();
            if($post)
                $post->searchable();
            $hash = $this->pageId('posts', $post->id);
            DB::table('posts_dictionaries')->insert([
                'hash' => $hash,
                'post_id' => $post->id,
            ]);

            for($j = 0; $j < 10; $j++){
                DB::table('post__photos')->insert([
                    'photolink' => 'images/1512666410.png',
                    'post_id' => $i,
                ]);
            }
        }
    }
    private function pageId($identifier, $id = null)
    {
        $uuid5 = Uuid::uuid5(Uuid::NAMESPACE_DNS, $identifier);
        if ($id) {
            $uuid5 = Uuid::uuid5(Uuid::NAMESPACE_DNS, $identifier . '-' . $id);
        }
        return $uuid5;
    }
}
