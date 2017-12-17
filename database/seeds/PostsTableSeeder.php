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
        for($i = 1; $i <= 500; $i++) {
            $search_sentence = "";
            $post = App\Posts::create([
                'title' => $faker->realText(20),
                'short_des' => $faker->realText(20),
                'long_des' => $faker->realText(200),
                'detailed_address' => $faker->address,
                'seller_name' => $faker->name,
                'seller_email' => $faker->email,
                'seller_contact_no' => $faker->phoneNumber,
                'price' => $faker->numberBetween(1000,2500),
                'sub_category_id' => $faker->numberBetween(19,50),
                'user_id' => $faker->numberBetween(1,20),
                'isArchived' => $faker->numberBetween(0, 1),
                'isApproved' => $faker->numberBetween(0, 1),
                'isinTop' => $faker->numberBetween(0, 1),
                'search_sentence' => "",
            ]);
            for($j = 0; $j < 2; $j++){
                $search_sentence .= ' ' . App\Filters::where('id', $faker->numberBetween(1,5))->first()->name;
                App\Filters::create(['filters_id' => $faker->numberBetween(1,5), 'posts_id' => $i]);
                $search_sentence .= ' ' . App\Filters::where('id', $faker->numberBetween(6,10))->first()->name;
                $search_sentence .= ' ' . App\Filters::where('id', $faker->numberBetween(11,12))->first()->name;
                App\Filters::create(['filters_id' => $faker->numberBetween(11,12), 'posts_id' => $i]);
                $search_sentence .= ' ' . App\Filters::where('id', $faker->numberBetween(13,14))->first()->name;
                App\Filters::create(['filters_id' => $faker->numberBetween(13,14), 'posts_id' => $i]);
            }
            $ancestor = App\Categories::findorfail($post->sub_category_id);
            $search_sentence .= ' ' . $ancestor->name;
            while($ancestor->sub_id != null){
                $ancestor = App\Categories::findorfail($ancestor->sub_id);
                $search_sentence .= ' ' . $ancestor->name;
            }
            // $search_sentence .= ' ' . $ancestor->name;
            //add post_features
            for($j = 0; $j < 2; $j++){
                $tmp = App\PostFeatures::create([
                    'type' => $faker->numberBetween(1,5),
                    'post_id' => $i,
                    'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
                ]);
                App\Filters::create(['filters_id' => $tmp->type + 5, 'posts_id' => $i]);
                if($tmp->type == 1){
                    $search_sentence .= ' isColored';
                }else if($tmp->type == 2){
                    $search_sentence .= ' isinMain';
                }else if($tmp->type == 3){
                    $search_sentence .= ' isinTop';
                }else if($tmp->type == 5){
                    $search_sentence .= ' isBreaking';
                }
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
