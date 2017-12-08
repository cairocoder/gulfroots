@extends('layouts.user')
@section('content')
    <!-- normal body -->
    <div class="normal-body">

        <div class="big-container">

            @include('includes.searchbar')

            @include('includes.specialcategories')
            <!-- link map -->
            <div class="link-map">
                <div class="map-item"><a href="{{ route ('landing')}}">الرئيسية</a></div>
                @foreach($parents as $cat)
                    <div class="map-item"><a href="{{ Url('categories/'.$cat->id) }}">{{$cat->name}}</a></div>
                @endforeach
                <div class="map-item">{{$post->short_des}}</div>
            </div>


            <!-- search data -->
            <div class="row no-margin top-25">

                <div class="col l9">
                    <div class="single-box">
                        </form>
                        @if($post->liked == 1)
                            <div class="watch-icon active">
                        @else
                            <div class="watch-icon">
                        @endif
                            <input type="hidden" name="liked" class="liked" value="{{$post->liked}}">
                            <input type="hidden" name="post_id" class="post_id" value="{{$post->id}}">
                            <i class="fa fa-star"></i>
                        </div>
                        <h1>{{$post->short_des}}</h1>
                        <h3> {{$post->price}} <span>ريال</span></h3>
                        <div class="row no-margin borderd">
                            <div class="col l6">
                                <i class="fa fa-map-marker"></i>
                                {{$post->country}} - {{$post->city}} |<span dir="ltr">مشاهدة {{Counter::showAndCount('posts', $post->id)}} </spin>
                            </div>
                            <div class="col l6 lefted">
                                <a href="{{Url('newad') .'/'. $post->sub_category_id}}">
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
                                @foreach($post_photos as $photo)
                                    <div class="swiper-slide" style="background-image:url('{{ asset($photo->photolink) }}')"></div>
                                @endforeach
                            </div>

                            <div class="swiper-button-next swiper-button-white"></div>
                            <div class="swiper-button-prev swiper-button-white"></div>
                        </div>
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                            @foreach($post_photos as $photo)
                                <div class="swiper-slide" style="background-image:url('{{ asset($photo->photolink) }}')"></div>
                            @endforeach
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
                                        <span>{{  strftime("%b %d %Y",strtotime($post->created_at))}}</span>
                                    </div>
                                    <div>
                                        تاريخ التعديل
                                        <span>{{  strftime("%b %d %Y",strtotime($post->updated_at))}}</span>
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
                        @foreach($latest as $listing)
                            @if($listing->id != $post->id)
                                <div class="col l4">
                                    <!-- ad item -->
                                    <a href="{{Url('posts').'/'.$listing->id}}" class="ad-item">
                                        <div class="image-box">
                                            <img src="{{ asset('front-assets/images/ad-thumb.jpg')}}" alt="">
                                            <div class="price boxed-only">{{$listing->price}}
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="سيارة بمواصفات خاصة" class="boxed-only">سيارة بمواصفات خاصة</h1>
                                        <div class="post-data normal-only">
                                            <h1 title="سيارة بمواصفات خاصة">سيارة بمواصفات خاصة</h1>
                                            <div class="price">{{$listing->price}}
                                                <span>ر.س</span>
                                            </div>
                                            <div class="desc">
                                                {{$listing->short_des}}
                                            </div>
                                        </div>
                                        <small class="boxed-only">مدينة الرياض</small>
                                        <div class="info normal-only">
                                            <h3>السعودية
                                                <small>الرياض</small>
                                            </h3>
                                            <div class="time">{{  strftime("%b %d %Y",strtotime($listing->created_at))}}</div>
                                        </div>
                                        @if($listing->liked == 1)
                                            <div class="watch-icon active">
                                        @else
                                            <div class="watch-icon">
                                        @endif
                                            <input type="hidden" name="liked" class="liked" value="{{$listing->liked}}">
                                            <input type="hidden" name="post_id" class="post_id" value="{{$listing->id}}">
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </a>
                                </div>
                            @endif    
                        @endforeach
                    </div>


                    <div class="strip-head on-top">اعلانات متشابهه</div>

                    <div class="row no-margin ads-list">
                    
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
                            <img src="{{ $seller->profile_picture }}" alt="">
                            <div class="user-data">
                                <a href="{{Url('user/'.$seller->id)}}">{{ $seller->name }}</a>
                                <span>{{  strftime("%b %d %Y",strtotime($seller->created_at)) }}</span>
                                <!-- <div class="on">متصل الان</div> -->
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
                                {{$seller->whatsapp_number}}
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