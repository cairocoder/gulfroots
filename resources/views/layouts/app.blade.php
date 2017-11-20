<!DOCTYPE html>
<html lang="en">
<head>

    <!-- Page Title -->
    <title>GulfRoots</title>

    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Copyright (c) Viralcorners">
    <meta name="keywords" content="The keywords here"/>
    <meta name="description" content="The description here"/>

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('favicon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-32x32.png" sizes="32x32')}}">
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-16x16.png" sizes="16x16')}}">
    <link rel="manifest" href="{{ asset('favicon/manifest.json')}}">
    <link rel="mask-icon" href="{{ asset('favicon/safari-pinned-tab.svg')}}" color="#fa5b31">
    <meta name="theme-color" content="#078aff">
    <link href="https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900&amp;subset=arabic"
          rel="stylesheet">

    <!-- Main Style -->
    <link rel="stylesheet" href="{{ asset('front-assets/css/style.min.ar.css')}}">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body class="black-header">
<!-- Header Strat -->
<header>
    @guest
        <div class="header-box">
            <div class="header-top">
                <div class="row no-margin">
                    <div class="col l7">
                        <!-- /Logo/ -->
                        <a class="logo" href="{{ route('landing')}}">
                            <img src="{{ asset('images/logo.png')}}" alt="GulfRoots">
                        </a>
                    </div>
                    <div class="col l2 user-area">
                        <a href="{{ route('login') }}">تسجيل الدخول</a>
                        <a href="{{ route('register') }}">التسجيل</a>
                    </div>
                    <div class="col l3 user-ctrl">
                        <div class="account-box">
                            <div class="account-head">
                                <img src="{{ asset('images/user.jpg')}}" alt="">
                                حسابي
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <div class="account-drop">
                                <ul>
                                    <li><a href="#!">أدراة اﻷعلانات</a></li>
                                    <li><a href="#!">الرسائل</a></li>
                                    <li><a href="#!">البحث المحفوظة</a></li>
                                    <li><a href="#!">الملف الشخصى</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="add-ad">
                            <a class="butn blue" href="#!">اضف اعلان</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        @else
            <div class="header-box">
                <div class="header-top">
                    <div class="row no-margin">
                        <div class="col l7">
                            <!-- /Logo/ -->
                            <a class="logo" href="{{route('landing')}}">
                                <img src="{{ asset('front-assets/images/logo.png')}}" alt="GulfRoots">
                            </a>
                        </div>
                        <div class="col l2 user-area">

                        </div>
                        <div class="col l3 user-ctrl">
                            <div class="account-box">
                                <div class="account-head">
                                    <img src="{{ Auth::user()->pofile_picture }}" alt="">
                                    <a href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                                        {{ Auth::user()->name }} <span></span>
                                    </a>
                                    <i class="fa fa-caret-down"></i>
                                </div>
                                <div class="account-drop">
                                    <ul>
                                        <li><a href="#!">أدراة اﻷعلانات</a></li>
                                        <li><a href="#!">الرسائل</a></li>
                                        <li><a href="#!">البحث المحفوظة</a></li>
                                        <li><a href="#!">الملف الشخصى</a></li>
                                        <li><a href="{{ route('logout') }}"
                                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                                Logout
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                                {{ csrf_field() }}
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="add-ad">
                                <a class="butn blue" href="#!">اضف اعلان</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        @endguest


        <!-- Menu Start -->
            <nav>
                <ul>
                    <li><a href="#!">السيارات والمركبات</a>
                    </li>
                    <li><a href="#!">السفر والسياحة</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">المنزل والحديقة</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">وظائف</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">العقارات</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">خدمات وتأجير</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">الاليكترونيات والكمبيوتر</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">الرياضة واللياقة البدنية</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">اخري</a>
                        <ul class="level2">
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                            <li><a href="#!">رابط</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- Menu End -->


</header>
<!-- Header End -->

<!-- Home -->
<div class="home-screen">
    <div class="screen" style="background-image:url('{{ asset('front-assets/images/home-screen.jpg')}}')">
        <h1 class="no-margin">
            كل ما تريدة واكثر بكثير ....
            <small>فقط علي قلف روتس</small>
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
                        <i class="fa fa-map-marker"></i>
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
            <div class="home-tab-screen new-ads active">


                @yield('content')


            </div>

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
                                <img src="assets/images/ad-thumb.jpg" alt="">
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
                                <img src="assets/images/ad-thumb.jpg" alt="">
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


<!-- top cats -->
<div class="top-cats">

    <div class="big-container">

        <div class="top-head centerd">
            <h2>الأقسام المميزة</h2>
            <h5>تصفح من خلال الاقسام المميزة والاكثر شعبية</h5>
        </div>

        <div class="row no-margin bottom-50">

            <div class="col l3 centerd">
                <a href="#!"><img src="{{ asset('front-assets/images/cat1.jpg')}}" alt=""></a>
            </div>
            <div class="col l3 centerd">
                <a href="#!"><img src="{{ asset('front-assets/images/cat2.jpg')}}" alt=""></a>
            </div>
            <div class="col l3 centerd">
                <a href="#!"><img src="{{ asset('front-assets/images/cat3.jpg')}}" alt=""></a>
            </div>
            <div class="col l3 centerd">
                <a href="#!"><img src="{{ asset('front-assets/images/cat4.jpg')}}" alt=""></a>
            </div>

            <div class="clearfix"></div>

        </div>

    </div>

</div>

<!-- spical cats -->
<div class="spical-cats white-bg">

    <div class="big-container">
        <div class="spical-head">المنتجات المميزة</div>
        <a href="#!">السيارات</a>
        <a href="#!">المركبات</a>
        <a href="#!">المفروشات</a>
        <a href="#!">الاثاث</a>
        <a href="#!">الاجهزة اللوحية</a>
        <a href="#!">لعب الاطفال</a>
        <a href="#!">الايفون</a>
        <a href="#!">وظائف</a>
        <a href="#!">مخبوزات</a>
        <a href="#!">منسقي حفلات</a>
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

<!-- Home -->


<!-- Fixed Footer Start -->
<footer>
    <div class="big-container">
        <div class="footer-top">
            تطبيقات قلف روتس الخاصة بالهواتف الذكية
            <a href="#!"><img src="{{ asset('front-assets/images/apple.jpg')}}" alt=""></a>
            <a href="#!"><img src="{{ asset('front-assets/images/google.jpg')}}" alt=""></a>
        </div>

        <div class="footer-map">
            <div class="row no-margin">
                <div class="col l3">
                    <h3>الدعم والمساعدة</h3>
                    <a href="#!">عن قلف روتس</a>
                    <a href="#!">خدمة العملاء</a>
                    <a href="#!">المساعدة</a>
                    <a href="#!">نصائح الحماية والخصوصية</a>
                    <a href="#!">اتصل بنا</a>
                </div>
                <div class="col l3">
                    <h3>اتفاقية الاستخدام</h3>
                    <a href="#!">الشروط والاحكام</a>
                    <a href="#!">سياسة الخصوصية</a>
                    <a href="#!">سياسية النشر</a>
                    <a href="#!">سياسة حفظ البيانات</a>
                </div>
                <div class="col l3">
                    <h3>الوصول السريع</h3>
                    <a href="{{ route('password.request') }}">استرجاع كلمة المرور</a>
                    <a href="#!">خدمات الشركات</a>
                    <a href="{{ url('commercialuserregister')}}">خدمات اﻷسر</a>
                    <a href="{{ url('personalregister')}}">خدمات الافراد</a>
                </div>
                <div class="col l3">
                    <h3>الاقسام الاكثر شهرة</h3>
                    <a href="#!">السيارات</a>
                    <a href="#!">الاجهزة الاليكترونية</a>
                    <a href="#!">الهواتف الذكية</a>
                    <a href="#!">الوظائف</a>
                    <a href="#!">لعب الاطفال</a>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="big-container">
            <div class="row no-margin">
                <div class="col l6">
                    جميع الحقوق محفوظة لدي قلف روتس
                </div>
                <div class="col l6 lefted">
                    <div class="footer-social">
                        <a href="#!" target="_blank"><i class="fa fa-youtube-play"></i></a>
                        <a href="#!" target="_blank"><i class="fa fa-instagram"></i></a>
                        <a href="#!" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="#!" target="_blank"><i class="fa fa-google-plus"></i></a>
                        <a href="#!" target="_blank"><i class="fa fa-twitter"></i></a>
                        <a href="#!" target="_blank"><i class="fa fa-facebook"></i></a>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</footer>
<!-- Fixed Footer End -->
<!-- jQuery plugins -->
<script defer src="{{Url('/')}}/js/ui.min.js"></script>
</body>
</html>