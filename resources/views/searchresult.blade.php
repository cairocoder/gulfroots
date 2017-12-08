@extends('layouts.user')
@section('content')
    <!-- normal body -->
    <div class="normal-body">

        <div class="big-container">

            @include('includes.searchbar')

            @include('includes.specialcategories')

            <!-- link map -->
            <div class="link-map">
                <div class="map-item"><a href="index.html">الرئيسية</a></div>
                @foreach($parents as $cat)
                    <div class="map-item"><a href="{{ Url('categories/'.$cat->id) }}">{{$cat->name}}</a></div>
                @endforeach
            </div>


            <!-- search data -->
            <div class="row no-margin top-25">

                <div class="col l3">
                    <!-- side filters start -->
                    <div class="side-filters">
                        <h2>تصفية النتائج</h2>

                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>السفر والسياحة</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li><a href="#!" class="active">جميع الاقسام</a></li>
                                <li><a href="#!">رابط</a></li>
                                <li><a href="#!">رابط</a></li>
                                <li><a href="#!">رابط</a></li>
                            </ul>
                        </div>


                        <div class="side-filter-level1">
                            <div class="filter-title active">
                                <span>الاماكن</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li class="has-sub">
                                    <div class="filter-title active">
                                        <span>السعودية</span>
                                        <i class="fa fa-caret-down"></i>
                                    </div>
                                    <ul class="filter-level2-data active">
                                        <li><a href="#!" class="active">رابط</a></li>
                                        <li><a href="#!">رابط</a></li>
                                        <li><a href="#!">رابط</a></li>
                                    </ul>
                                </li>
                                <li class="has-sub">
                                    <div class="filter-title">
                                        <span>الامارات</span>
                                        <i class="fa fa-caret-down"></i>
                                    </div>
                                    <ul class="filter-level2-data">
                                        <li><a href="#!">رابط</a></li>
                                        <li><a href="#!">رابط</a></li>
                                        <li><a href="#!">رابط</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>حسب السعر</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li>
                                    <form>
                                        <input type="text" placeholder="السعر الادني">
                                        <input type="text" placeholder="السعر الاقصي">
                                        <input type="submit" value="تصفية">
                                    </form>
                                </li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع الاعلان</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                                <li><a href="#!">اعلانات مدفوعة عادية</a></li>
                                <li><a href="#!">اعلانات مدفوعة مميزة</a></li>
                                <li><a href="#!">اعلانات مدفوعة عاجلة</a></li>
                                <li><a href="#!">اعلانات مدفوعة ملونة</a></li>
                                <li><a href="#!">افضل الاعلانات</a></li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>عدد الافراد</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li>
                                    <form>
                                        <select>
                                            <option selected disabled>اختر عدد الافراد</option>
                                            <option>فرد</option>
                                            <option>فردين</option>
                                            <option>3 افراد</option>
                                            <option>4 افراد</option>
                                            <option>5 افراد</option>
                                        </select>
                                    </form>
                                </li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع البيع</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li><a href="#!">عرض</a></li>
                                <li><a href="#!">طلب</a></li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع العرض</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li><a href="#!">قابل للتفاوض</a></li>
                                <li><a href="#!">نهائي</a></li>
                            </ul>
                        </div>

                        <div class="google-ads">
                            <img src="assets/images/ads.png" alt="">
                        </div>

                        <div class="google-ads">
                            <img src="assets/images/ads.png" alt="">
                        </div>

                    </div>
                    <!-- side filters end -->
                </div>

                <div class="col l9">
                    <div class="controler-wraper">
                        <div class="control-box">
                            <div class="views-box">
                                <div class="switch-view list-view active">
                                    <i class="fa fa-bars"></i> عرض قائمة
                                </div>
                                <div class="switch-view grid-view">
                                    <i class="fa fa-th-large"></i> عرض شبكي
                                </div>
                            </div>
                            <div class="sort-box">
                                <select>
                                    <option>الاحدث اولا</option>
                                    <option>الاكثر تشابه</option>
                                    <option>الاقل سعر</option>
                                    <option>الاعلي سعر</option>
                                </select>
                            </div>
                        </div>

                        <div class="centerd">
                            <img src="assets/images/width-ads.jpg" alt="">
                        </div>

                        <div class="strip-head blue on-top">افضل الاعلانات</div>

                        <div class="row no-margin ads-list">

                            <!-- <div class="col l4">
                                ad item
                                <a href="#!" class="ad-item">
                                    <div class="image-box">
                                        <img src="assets/images/ad-thumb.jpg" alt="">
                                        <div class="price boxed-only">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                    <div class="post-data normal-only">
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                        <div class="desc">
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي
                                        </div>
                                    </div>
                                    <small class="boxed-only">مدينة الرياض</small>
                                    <div class="info normal-only">
                                        <h3>السعودية
                                            <small>الرياض</small>
                                        </h3>
                                        <div class="time">منذ 15 دقيقة</div>
                                    </div>
                                    <div class="watch-icon active">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div>

                            <div class="col l4">
                                ad item
                                <a href="#!" class="ad-item">
                                    <div class="image-box">
                                        <img src="assets/images/ad-thumb.jpg" alt="">
                                        <div class="price boxed-only">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                    <div class="post-data normal-only">
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                        <div class="desc">
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي
                                        </div>
                                    </div>
                                    <small class="boxed-only">مدينة الرياض</small>
                                    <div class="info normal-only">
                                        <h3>السعودية
                                            <small>الرياض</small>
                                        </h3>
                                        <div class="time">منذ 15 دقيقة</div>
                                    </div>
                                    <div class="watch-icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div>

                            <div class="col l4">
                                ad item
                                <a href="#!" class="ad-item">
                                    <div class="image-box">
                                        <img src="assets/images/ad-thumb.jpg" alt="">
                                        <div class="price boxed-only">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                    <div class="post-data normal-only">
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                        <div class="desc">
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي
                                        </div>
                                    </div>
                                    <small class="boxed-only">مدينة الرياض</small>
                                    <div class="info normal-only">
                                        <h3>السعودية
                                            <small>الرياض</small>
                                        </h3>
                                        <div class="time">منذ 15 دقيقة</div>
                                    </div>
                                    <div class="watch-icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div> -->

                        </div>


                        <div class="strip-head on-top">احدث الاعلانات</div>

                        <div class="row no-margin ads-list">
                            @if(count($posts) > 0)
                                @foreach($posts as $post)
                                <div class="col l4">
                                    <!-- ad item -->
                                    <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                                        <div class="image-box">
                                            <img src="{{$post->img}}" alt="">
                                            <div class="price boxed-only">{{$post->price}}
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="سيارة بمواصفات خاصة" class="boxed-only">{{$post->short_des}} </h1>
                                        <div class="post-data normal-only">
                                            <h1 title="سيارة بمواصفات خاصة">
                                            {{$post->short_des}} 
                                            </h1>
                                            <div class="price">{{$post->price}}
                                                <span>ر.س</span>
                                            </div>
                                            <div class="desc">
                                                {{$post->long_des}}
                                            </div>
                                        </div>
                                        <small class="boxed-only">مدينة الرياض</small>
                                        <div class="info normal-only">
                                            <h3>السعودية
                                                <small>الرياض</small>
                                            </h3>
                                            <div class="time"> {{$post->created_at}}</div>
                                        </div>
                                        @if($post->liked == 1)
                                            <div class="watch-icon active">
                                        @else
                                            <div class="watch-icon">
                                        @endif
                                            <input type="hidden" name="liked" class="liked" value="{{$post->liked}}">
                                            <input type="hidden" name="post_id" class="post_id" value="{{$post->id}}">
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </a>
                                </div>
                                @endforeach
                            @else
                                <h1> No Search Results </h1>
                            @endif
                            

                            <!-- <div class="col l4">
                                ad item
                                <a href="#!" class="ad-item heigh-light">
                                    <div class="important"><span></span>
                                        <div>عاجل</div>
                                    </div>
                                    <div class="image-box">
                                        <img src="assets/images/ad-thumb.jpg" alt="">
                                        <div class="price boxed-only">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                    <div class="post-data normal-only">
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                        <div class="desc">
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي
                                        </div>
                                    </div>
                                    <small class="boxed-only">مدينة الرياض</small>
                                    <div class="info normal-only">
                                        <h3>السعودية
                                            <small>الرياض</small>
                                        </h3>
                                        <div class="time">منذ 15 دقيقة</div>
                                    </div>
                                    <div class="watch-icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div>

                            <div class="col l4">
                                ad item
                                <a href="#!" class="ad-item">
                                    <div class="image-box">
                                        <img src="assets/images/ad-thumb.jpg" alt="">
                                        <div class="price boxed-only">500000
                                            <span>ر.س</span>
                                        </div>
                                    </div>
                                    <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                    <div class="post-data normal-only">
                                        <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                        <div class="price">500000
                                            <span>ر.س</span>
                                        </div>
                                        <div class="desc">
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي نص تجريبي
                                            نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص
                                            تجريبي نص تجريبي
                                        </div>
                                    </div>
                                    <small class="boxed-only">مدينة الرياض</small>
                                    <div class="info normal-only">
                                        <h3>السعودية
                                            <small>الرياض</small>
                                        </h3>
                                        <div class="time">منذ 15 دقيقة</div>
                                    </div>
                                    <div class="watch-icon">
                                        <i class="fa fa-star"></i>
                                    </div>
                                </a>
                            </div> -->

                        </div>


                        <div class="centerd">
                            <img src="assets/images/width-ads.jpg" alt="">
                        </div>


                        <div class="strip-head on-top">
                            <div class="mini-tabs">
                                <div class="tab-button active" data-tab-btn=".m25ran">شوهد مؤخرا</div>
                                <div class="tab-button" data-tab-btn=".tamany">قائمة التمني</div>
                                <div class="tab-button" data-tab-btn=".ma7foz">بحث محفوظ</div>
                            </div>
                        </div>
                        <div class="tabs-body">

                            <div class="mini-tab-box m25ran active swiped">
                                <div class="swiper-container" dir="rtl">
                                    <div class="swiper-wrapper">

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>

                            <div class="mini-tab-box tamany">
                                <div class="swiper-container" dir="rtl">
                                    <div class="swiper-wrapper">

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>

                            <div class="mini-tab-box ma7foz">
                                <div class="swiper-container" dir="rtl">
                                    <div class="swiper-wrapper">

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                        <!-- slide start -->
                                        <div class="swiper-slide">
                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>

                                            <!-- ad item -->
                                            <a href="#!" class="ad-item">
                                                <div class="image-box">
                                                    <img src="assets/images/ad-thumb.jpg" alt="">
                                                </div>
                                                <div class="post-data">
                                                    <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                                    <div class="price">500000
                                                        <span>ر.س</span>
                                                    </div>
                                                    <small class="boxed-only">مدينة الرياض</small>
                                                </div>
                                                <div class="watch-icon">
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <!-- slide end -->

                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>

                        </div>


                        <div class="centerd">
                            <img src="assets/images/width-ads.jpg" alt="">
                        </div>

                    </div>
                </div>

                <div class="clearfix"></div>
            </div>

        </div>


    </div>
@endsection