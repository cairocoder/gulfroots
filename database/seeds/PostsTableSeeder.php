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
        for($i = 1; $i <= 50; $i++) {
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
            ]);
            // $search_sentence .= ' ' . $ancestor->name;
            //add post_features
            DB::table('post_features')->insert([
                'type' => $faker->numberBetween(1,5),
                'post_id' => $i,
                'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
            ]);
            //add post filters
            if($post)
            $post->searchable();
            $hash = $this->pageId('posts', $post->id);
            DB::table('posts_dictionaries')->insert([
                'hash' => $hash,
                'post_id' => $post->id,
            ]);
        }
        for($i = 0; $i < 50; $i++){
            for($j = 0; $j < 10; $j++){
                DB::table('post__photos')->insert([
                    'photolink' => 'images/1512666410.png',
                    'post_id' => $i + 1,
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
