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
        for($i = 1; $i <= 10; $i++) {
            DB::table('posts')->insert([
                'short_des' => $faker->realText(20),
                'long_des' => $faker->realText(200),
                'detailed_address' => $faker->address,
                'seller_name' => $faker->name,
                'seller_email' => $faker->email,
                'seller_contact_no' => $faker->phoneNumber,
                'price' => $faker->numberBetween(1000,2500),
                'sub_category_id' => $faker->numberBetween(19,25),
                'user_id' => $faker->numberBetween(1,10),
            ]);
        }
    }
}
