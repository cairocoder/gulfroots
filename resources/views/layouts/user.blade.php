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
    <meta name="keywords" content="The keywords here" />
    <meta name="description" content="The description here" />
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('favicon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-32x32.png')}}" sizes="32x32">
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-16x16.png') }}" sizes="16x16">
    <link rel="manifest" href="{{ asset('favicon/manifest.json')}}">
    <link rel="mask-icon" href="{{ asset('favicon/safari-pinned-tab.svg')}}" color="#fa5b31">
    <meta name="theme-color" content="#078aff">
    <link href="https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900&amp;subset=arabic" rel="stylesheet">
    
      <!-- Main Style -->
      <link href="{{ asset('front-assets/css/style.min.ar.css') }}" rel="stylesheet">
    
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
        <!--<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>-->
        <!--<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>-->
        <script src="//cdnjs.cloudflare.com/ajax/libs/authy-forms.js/2.2/form.authy.min.js"></script>
      <![endif]-->

    
      
  </head>

  <body class="white-header">

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
                                <img src="{{ asset('front-assets/images/user.jpg')}}" alt="">
                                <a href="#"  data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span ></span>
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
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" >
                                            {{ csrf_field() }}
                                        </form></li>
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


    
    <div class="">

        
                
                @yield('content')
                
           

        

      </div>
     

      <!-- Fixed Footer Start -->
      <footer>
        <div class="big-container">
            <div class="footer-top">
                تطبيقات قلف روتس الخاصة بالهواتف الذكية 
                <a href="#!"><img src="{{ asset('images/apple.jpg')}}" alt=""></a>
                <a href="#!"><img src="{{ asset('images/google.jpg')}}" alt=""></a>
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
      <script defer src="{{Url('/')}}/front-assets/js/ui.min.js"></script>
  </body>
</html>