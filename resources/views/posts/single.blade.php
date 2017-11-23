@extends('layouts.user')
@section('content')
    <!-- normal body -->
    <div class="normal-body">

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

            <!-- spical inside -->
            <div class="spical-inside">
                    <div class="spical-head start {{Request::is('/categories*')?"active":""}}">المنتجات المميزة</div>
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

            <!-- link map -->
            <div class="link-map">
                <div class="map-item"><a href="{{ route ('landing')}}">الرئيسية</a></div>
                <div class="map-item"><a href="">{{$post->category_id}}</a></div>
                <div class="map-item">{{$post->name}}</div>
            </div>


            <!-- search data -->
            <div class="row no-margin top-25">

                <div class="col l9">
                    <div class="single-box">
                        <div class="watch-icon">
                            <i class="fa fa-star"></i>
                        </div>
                        <h1>{{$post->name}}</h1>
                        <h3> {{$post->price}} <span>ريال</span></h3>
                        <div class="row no-margin borderd">
                            <div class="col l6">
                                <i class="fa fa-map-marker"></i>
                                {{$post->country}} - {{$post->city}} |<span dir="ltr">مشاهدة {{Counter::showAndCount('posts', $post->id)}} </spin>
                            </div>
                            <div class="col l6 lefted">
                                <a href="#!">
                                    <i class="fa fa-plus crcl"></i> اضف اعلان مشابة
                                </a>
                                |
                                <a href="#!" class="modal-open" data-modal-open=".share-now">
                                    <i class="fa fa-share crcl"></i> مشاركة
                                </a>
                                |
                                <a href="#!" class="show-drop">
                                    <i class="fa fa-ban"></i> ابلغ عن اعلان مسئ
                                </a>
                                <div class="report-box my-drop">
                                    <form>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> اعلان مكرر
                                        </label>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> اعلان زائف
                                        </label>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> تصنيف خاطئ
                                        </label>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> غير متاحة
                                        </label>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> المعلن لا يستجيب
                                        </label>
                                        <label class="checkbox blued">
                                            <input type="checkbox"><span></span> اخري
                                        </label>
                                        <input type="submit" value="تبليغ">
                                    </form>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                        <div class="swiper-container gallery-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                            </div>

                            <div class="swiper-button-next swiper-button-white"></div>
                            <div class="swiper-button-prev swiper-button-white"></div>
                        </div>
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad2.jpg')}}')"></div>
                                <div class="swiper-slide" style="background-image:url('{{ asset('front-assets/images/ad1.jpg')}}')"></div>
                            </div>
                        </div>

                    </div>


                    <div class="centerd top-25 bottom-25">
                        <img src="{{ asset('front-assets/images/width-ads.jpg')}}" alt="">
                    </div>

                    <div class="product-info">

                        <div class="row no-margin">
                            <div class="col l7">
                                <h2>وصف المنتج</h2>
                                <p>
                                  {{$post->long_des}}
                                </p>
                            </div>
                            <div class="col l5">
                                <div class="product-det">
                                    <div>
                                        تاريخ الاعلان
                                        <span>{{$post->created_at}}</span>
                                    </div>
                                    <div>
                                        تاريخ التعديل
                                        <span>{{$post->updated_at}}</span>
                                    </div>
                                    <div>
                                        الحالة
                                        <span>مستعمل</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="strip-head blue on-top">احدث الاعلانات لهذا البائع</div>

                    <div class="row no-margin ads-list">

                        <div class="col l4">
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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

                    </div>


                    <div class="strip-head on-top">اعلانات متشابهه</div>

                    <div class="row no-margin ads-list">

                        <div class="col l4">
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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
                            <!-- ad item -->
                            <a href="#!" class="ad-item">
                                <div class="image-box">
                                    <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي
                                        نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
                                        نص تجريبي
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

                    </div>

                    <div class="centerd">
                        <img src="{{ asset('front-assets/images/width-ads.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                                                <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
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
                        <img src="{{ asset('front-assets/images/width-ads.jpg')}}" alt="">
                    </div>

                </div>

                <div class="col l3">

                    <div class="user-side">
                        <div class="user-info-box">
                            <img src="{{ asset('front-assets/images/user-mini.jpg')}}" alt="">
                            <div class="user-data">
                                <a href="#!">اسم المستخدم</a>
                                <span>10/10/2010</span>
                                <div class="on">متصل الان</div>
                            </div>
                        </div>

                        <div class="send-masseg mt-25 the-btn blue modal-open" data-modal-open=".normal-messege">ارسل
                            رسالة
                        </div>

                        <a href="#!" class="whats mt-15 the-btn gray">تواصل خلال واتس اب</a>

                        <div class="borderd mt-15 show-num">
                            اظهر الرقم
                            <span>
                                +996******
                            </span>
                            <span>
                                +9961854215
                            </span>
                        </div>


                        <div class="borderd">
                            <form>
                                <h3 class="centerd">هل انت مشغول؟
                                    <small>اترك بياناتك وسوف نعاود الاتصال بك</small>
                                </h3>
                                <input placeholder="الاسم" type="text">
                                <input placeholder="رقم الجوال" type="text">
                                <textarea placeholder="ملاحظات"></textarea>
                                <input type="submit" value="ارسال">
                            </form>
                        </div>

                        <div class="borderd ebay">
                            <a href="#!" target="_blank">
                                <i class="fa fa-link"></i>
                                رابط التاجر</a>

                            <a href="#!" class="map-opener modal-open" data-modal-open=".location">
                                <i class="fa fa-map-marker"></i>
                                موقع التاجر علي الخريطة</a>

                            <div class="centerd bolded nc top-25">
                                قم بتقديم عرض
                                <div class="input-ebay mt-15">
                                    <form>
                                        <input type="text" placeholder="0">
                                        <button type="submit">ادفع</button>
                                    </form>
                                </div>

                            </div>
                        </div>

                        <div class="mt-15">
                            <div class="bolded nb">مواعيد العمل</div>
                            <div class="nc">
                                يوميا من الساعه 9 صباحا وحتي الساعه 6 مساءا
                                والعطلة الاسبوعية : يوم الجمعه
                            </div>
                        </div>

                    </div>

                    <a href="#!" class="modal-open direct mt-15 the-btn orang mb-15" data-modal-open=".direct-messege">التحدث
                        المباشر</a>

                    <div class="google-ads">
                        <img src="{{ asset('front-assets/images/ads.png')}}" alt="">
                    </div>

                    <div class="google-ads">
                        <img src="{{ asset('front-assets/images/ads.png')}}" alt="">
                    </div>

                </div>

                <div class="clearfix"></div>
            </div>

        </div>


    </div>
@endsection
