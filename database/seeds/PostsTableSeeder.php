<?php

use Illuminate\Database\Seeder;

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
        for($i = 1; $i <= 20; $i++) {
            $post = App\Posts::create([
                'short_des' => $faker->realText(20),
                'long_des' => $faker->realText(200),
                'detailed_address' => $faker->address,
                'seller_name' => $faker->name,
                'seller_email' => $faker->email,
                'seller_contact_no' => $faker->phoneNumber,
                'price' => $faker->numberBetween(1000,2500),
                'sub_category_id' => $faker->numberBetween(19,120),
                'user_id' => $faker->numberBetween(1,20),
            ]);
            $post->searchable();
            DB::table('post_features')->insert([
                'type' => $faker->numberBetween(1,5),
                'post_id' => $i + 1,
                'expiry_date' => $post->created_at->addDays($faker->numberBetween(7,30)),
            ]);
        }
        for($i = 0; $i < 20; $i++){
            for($j = 0; $j < 10; $j++){
                DB::table('post__photos')->insert([
                    'photolink' => 'images/1512666410.png',
                    'post_id' => $i + 1,
                ]);
            }
        }
    }
}
