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
      @include('includes.searchbar')

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
                        <a href="{{Url('/')}}/categories/11}}"><img src="{{ asset('front-assets/images/cat2.jpg')}}" alt=""></a>
                </div>
                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/9}}"><img src="{{ asset('front-assets/images/cat3.jpg')}}" alt=""></a>
                </div>
                <div class="col l3 centerd">
                        <a href="{{Url('/')}}/categories/13}}"><img src="{{ asset('front-assets/images/cat4.jpg')}}" alt=""></a>
                </div>

                <div class="clearfix"></div>

            </div>

        </div>

      </div>

      @include('includes.specialcategories')


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
