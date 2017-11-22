@extends('layouts.app')
@section('content')
<!-- Home -->
<div class="home-screen">
  <div class="screen" style="background-image:url('{{ asset('front-assets/images/home-screen.jpg')}}')">
    <h1 class="no-margin">
        كل ما تريدة واكثر بكثير .... <small>فقط علي قلف روتس</small>
    </h1>
  </div>
</div>
<div class="home-body">
  <div class="big-container">
      <!-- filter start -->
      <div class="main-filter">
          <form>
              <!-- select dropdown start -->
            <div class="select-cat">
                <!-- hidden input to catch the id -->
                <input id="cat-id" type="text" hidden>
                <!-- select icon in the search bar -->
                <div class="select-head">
                    <div class="select-icon">
                        <i class="fa fa-bars"></i>
                    </div>
                    <i class="fa fa-caret-down"></i>
                </div>
                <!-- dropdown wrapper -->
                <div class="select-box">
                    <!-- select all cats -->
                    <div class="select-group" data-cat-icon="bars" data-cat-id="0">
                            <i class="fa fa-bars"></i> جميع الاقسام
                    </div>
                    <!-- select group level 1 start  -->
                    <div class="select-group" data-cat-icon="car" data-cat-id="1">
                        <i class="fa fa-car"></i> السيارات والمركبات
                        <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                        <!-- select group level 2 start  -->
                        <div class="group-box">
                            <!-- group item -->
                            <div class="select-item-level1" data-cat-id="2">
                                رابط
                                <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                                <!-- select group level 3 start  -->
                                <div class="group-box2">
                                    <!-- group item -->
                                    <div class="select-item-level2" data-cat-id="3">
                                            رابط
                                    </div>
                                    <!-- group item -->
                                    <div class="select-item-level2" data-cat-id="4">
                                            رابط
                                    </div>
                                    <!-- group item -->
                                    <div class="select-item-level2" data-cat-id="5">
                                            رابط
                                    </div>
                                    <!-- group item -->
                                    <div class="select-item-level2" data-cat-id="6">
                                            رابط
                                    </div>
                                </div>
                                <!-- select group level 3 end  -->

                            </div>
                            <!-- group item -->
                            <div class="select-item-level1" data-cat-id="7">
                                    رابط
                                    <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                                    <!-- select group level 3 start  -->
                                    <div class="group-box2">
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="8">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="9">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="10">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="11">
                                                رابط
                                        </div>
                                    </div>
                                    <!-- select group level 3 end  -->

                            </div>
                            <!-- group item -->
                            <div class="select-item-level1" data-cat-id="12">
                                    رابط
                            </div>
                        </div>
                        <!-- select group level 2 end  -->

                    </div>
                    <!-- select group level 1 end  -->

                    <!-- select group level 1 start  -->
                    <div class="select-group" data-cat-icon="ship" data-cat-id="13">
                            <i class="fa fa-ship"></i>قوارب والدراجات المائية
                            <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                            <!-- select group level 2 start  -->
                            <div class="group-box">
                                <!-- group item -->
                                <div class="select-item-level1" data-cat-id="14">
                                    رابط
                                    <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                                    <!-- select group level 3 start  -->
                                    <div class="group-box2">
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="15">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="16">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="17">
                                                رابط
                                        </div>
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="18">
                                                رابط
                                        </div>
                                    </div>
                                    <!-- select group level 3 end  -->

                                </div>
                                <!-- group item -->
                                <div class="select-item-level1" data-cat-id="19">
                                        رابط
                                        <div class="group-toggle"><i class="fa fa-caret-down"></i></div>

                                        <!-- select group level 3 start  -->
                                        <div class="group-box2">
                                            <!-- group item -->
                                            <div class="select-item-level2" data-cat-id="20">
                                                    رابط
                                            </div>
                                            <!-- group item -->
                                            <div class="select-item-level2" data-cat-id="21">
                                                    رابط
                                            </div>
                                            <!-- group item -->
                                            <div class="select-item-level2" data-cat-id="22">
                                                    رابط
                                            </div>
                                            <!-- group item -->
                                            <div class="select-item-level2" data-cat-id="23">
                                                    رابط
                                            </div>
                                        </div>
                                        <!-- select group level 3 end  -->

                                </div>
                                <!-- group item -->
                                <div class="select-item-level1" data-cat-id="24">
                                        رابط
                                </div>
                            </div>
                            <!-- select group level 2 end  -->

                        </div>
                        <!-- select group level 1 end  -->
                </div>
            </div>
            <!-- select dropdown end -->

            <!-- search bar -->
            <div class="main-search">
                <input type="text" placeholder="ابحث عن ...">
            </div>

            <!-- city box -->
            <div class="city-box">
                <div class="city-form">
                <i  class="fa fa-map-marker"></i>
                <input type="text" placeholder="المدينة">
                <select>
                    <option selected>0 كم</option>
                    <option>5 كم</option>
                    <option>10 كم</option>
                    <option>20 كم</option>
                    <option>40 كم</option>
                    <option>80 كم</option>
                    <option>100 كم</option>
                </select>
                </div>
            </div>

            <!-- submit -->
            <input type="submit" value="إبحث">
          </form>
      </div>
      <!-- filter end -->

      <!-- home tabs -->
      <div class="home-tabs">
          <div class="row no-margin">

            <div class="home-tab col l3 active" data-tab-target=".new-ads">
                أحدث الاعلانات
            </div>
            <div class="home-tab col l3" data-tab-target=".prev-ads">
                مشاهدات سابقة
            </div>
            <div class="home-tab col l3" data-tab-target=".watch-ads">
                قائمة الرغبات
            </div>
            <div class="home-tab col l3" data-tab-target=".search-ads">
                عمليات بحث سابقة
            </div>

          </div>
      </div>


      <!-- home tabs screens -->
      <div class="home-tabs-screens">
        <!-- new ads tab -->
        <!-- prev ads tab -->
        <div class="home-tab-screen prev-ads">
                <div class="row no-margin boxed-ads">
                        <div class="col l3">
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
                                    <div class="price">500000
                                        <span>ر.س</span>
                                    </div>
                                </div>
                                <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                <small>مدينة الرياض</small>
                                <div class="watch-icon active">
                                    <i class="fa fa-star"></i>
                                </div>
                            </a>
                        </div>

                        <div class="col l3">
                                <!-- ad item -->
                                <a href="#!" class="ad-item">
                                    <div class="image-box">
                                        <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                    <small>مدينة الرياض</small>
                                    <div class="watch-icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div>

                            <div class="col l3">
                                    <!-- ad item -->
                                    <a href="#!" class="ad-item">
                                        <div class="image-box">
                                            <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
                                            <div class="price">500000
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <small>مدينة الرياض</small>
                                        <div class="watch-icon">
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </a>
                            </div>


                            <div class="clearfix"></div>
                </div>

        </div>

        <!-- watch ads tab -->
        <div class="home-tab-screen watch-ads">

                <div class="row no-margin boxed-ads">

                        <div class="col l3">
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
                                    <div class="price">500000
                                        <span>ر.س</span>
                                    </div>
                                </div>
                                <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                <small>مدينة الرياض</small>
                                <div class="watch-icon active">
                                    <i class="fa fa-star"></i>
                                </div>
                            </a>
                        </div>

                        <div class="clearfix"></div>
                </div>

        </div>

        <!-- search ads tab -->
        <div class="home-tab-screen search-ads">

            <div class="row no-margin boxed-ads no-data">

                <h2>لاتوجد عمليات بحث سابقة</h2>
                <h4>ابدأ باضافه عمليات البحث السابقه من خلال اختيار كلمة البحث والضغط علي مفتاح إبحث.</h4>

            </div>

        </div>


        <div class="centerd top-50">
                <img src="{{ asset('front-assets/images/width-ads.jpg')}}" alt="">
        </div>

      </div>


  </div>

</div>
<div class="top-cats">

        <div class="big-container">

            <div class="top-head centerd">
                <h2>الأقسام المميزة</h2>
                <h5>تصفح من خلال الاقسام المميزة والاكثر شعبية</h5>
            </div>

            <div class="row no-margin bottom-50">

                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/1}}"><img src="{{ asset('front-assets/images/cat1.jpg')}}" alt=""></a>
                </div>
                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/3}}"><img src="{{ asset('front-assets/images/cat2.jpg')}}" alt=""></a>
                </div>
                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/4}}"><img src="{{ asset('front-assets/images/cat3.jpg')}}" alt=""></a>
                </div>
                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/7}}"><img src="{{ asset('front-assets/images/cat4.jpg')}}" alt=""></a>
                </div>

                <div class="clearfix"></div>

            </div>

        </div>

      </div>

      <!-- spical cats -->
      <div class="spical-cats white-bg">

            <div class="big-container start {{Request::is('/categories*')?"active":""}}">
                <div class="spical-head">المنتجات المميزة</div>
                @if(count($spechialcategory) > 0)
                @foreach($spechialcategory as $spechial)
                <a href="{{Url('/')}}/categories/{{$spechial->id}}">{{$spechial->slug}}</a>
                @if($spechial->id === 10)
                @break
                @endif
                @endforeach
                @else
                @endif
            </div>
      </div>


      <!-- home slider -->
      <div class="home-slider">
            <div class="swiper-container" dir="rtl">
                <div class="swiper-wrapper">

                    <!-- slide start -->
                    <div class="swiper-slide" style="background-color:#078aff">
                        <div class="big-container">
                            <div class="row no-margin">
                                <div class="col l1"></div>
                                <div class="col l5">
                                    <h2>الشراء والبيع بكل امان</h2>
                                    <h5>
                                        يمكنك مع قلف روتس الشراء والبيع بكل سرية وامان<br>
                                        نوفر وسائل عالية من الامان والحماية للبيانات والتعاملات والخصوصية للبائع
                                        والمشتري في وقت واحد
                                    </h5>
                                </div>
                                <div class="col l5 lefted">
                                    <img src="{{ asset('front-assets/images/home-slider.jpg')}}" alt="">
                                </div>
                                <div class="col l1"></div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- slide end -->

                    <!-- slide start -->
                    <div class="swiper-slide" style="background-color:#078aff">
                        <div class="big-container">
                            <div class="row no-margin">
                                <div class="col l1"></div>
                                <div class="col l5">
                                    <h2>الشراء والبيع بكل امان</h2>
                                    <h5>
                                        يمكنك مع قلف روتس الشراء والبيع بكل سرية وامان<br>
                                        نوفر وسائل عالية من الامان والحماية للبيانات والتعاملات والخصوصية للبائع
                                        والمشتري في وقت واحد
                                    </h5>
                                </div>
                                <div class="col l5 lefted">
                                    <img src="{{ asset('front-assets/images/home-slider.jpg')}}" alt="">
                                </div>
                                <div class="col l1"></div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <!-- slide end -->

                </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
            </div>
      </div>
@endsection
