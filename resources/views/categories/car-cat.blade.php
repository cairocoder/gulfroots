@extends('layouts.app')
@section('title', ' - ' . $category->name)
@section('content')
    @if($category->sub_id == null)
    <div class="cat-banner" style="background-image:url('{{ asset($category->photo)}}')">
        <h1>{{$category->name}}</h1>
    </div>
    @endif
    <!-- normal body -->
    <div class="normal-body">
        <div class="big-container">
            @include('includes.searchbar')
            @include('includes.specialcategories')
            <!-- link map -->
            <div class="link-map">
                <div class="map-item"><a href="{{route('landing')}}">الرئيسية</a></div>
                @foreach($parents as $cat)
                    <div class="map-item"><a href="{{ Url('categories/'.$cat['id']) }}">{{$cat['name_ar']}}</a></div>
                @endforeach
            </div>
            
            <!-- search data -->
            <div class="row no-margin top-25">

                <div class="col l9">

                    <!-- top search -->
                    <div class="top-cat-search">
                        
                        
                        <div class="row no-margin">
                        <form method="GET" class="search" action="{{Url('search')}}" id="form2">
                            {{csrf_field()}}
                        <input type="hidden" class="applied-filters" name="applied_filters" value="{{$applied_ret or ''}}">
                        <input type="hidden" name="search_city" value="">
                        <input type="hidden" name="sort" value="">
                        <input id="cat-id" type="text" name="cat-id" value="1" hidden>   
                            <div class="col l6 m12">
                                <input type="text" placeholder="السعر الاقصي" name="maxi_price" value="{{$request['maxi-price'] or ''}}" id="maxi">
                            </div>
                            <div class="col l6 m12">
                                <input type="text" placeholder="السعر الادني" name="mini_price" value="{{$request['mini-price'] or ''}}" id="mini">
                            </div>
                            <?php $arr = $filters['type']?>
                            @foreach($filters as $key=>$filter)
                            
                                @if($loop->index > 0 && $loop->index < 7 && $key != "type" && $arr[$key] == 1)
                                <div class="col l6 m12">
                                    <select name="filters[{{$key}}]">
                                        <option>{{$key}}</option>    
                                        @foreach($filter as $val)
                                            <option value="{{$val['name']}}">{{$val['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                @endif
                            @endforeach
                            <div class="col l6 m12">
                                <input type="text" placeholder="كلمة البحث..." name="search_query">
                            </div>
                            
                            <div class="col l12 m12 lefted">
                                <!-- <a href="#!">بحث متقدم</a> -->
                                <input type="submit" value="إبحث">
                            </div>
                        </form>

                        </div>
                        

                    </div>


                    <div class="centerd">
                            <img src="assets/images/width-ads.jpg" alt="">
                    </div>
<br>


                    <div>
                        <div class="row no-margin boxed-ads">
                            @foreach($posts as $key=>$post)
                            @if($key == 2)
                                <div class="col l4">
                                    <div class="google-ads">
                                        <img src="{{ asset('front-assets/images/ads.png')}}" alt="">
                                    </div>
                                </div>
                            @endif
                                <div class="col l4">
                                    <!-- ad item -->
                                    @if($post->isColored)
                                        <a href="{{Url('posts').'/'.$post->id}}" class="ad-item heigh-light">
                                    @else
                                        <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                                    @endif
                                    @if($post->isUrgent)
                                        <div class="important"><span></span><div>عاجل</div></div>
                                    @endif
                                        <div class="image-box">
                                            <img src="{{Url($post->img)}}" alt="">
                                            <div class="price">{{$post->price}}
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="{{$post->short_des}}">{{$post->short_des}}</h1>
                                        <small>مدينة {{$post->city}}</small>
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
                            <div class="clearfix"></div>
                        </div>
<br>
                        <div class="centerd">
                                <img src="assets/images/width-ads.jpg" alt="">
                        </div>


                                              
                    </div>
                </div>




                <div class="col l3">

                    <!-- cars side -->

                    <!-- side ad -->
                    <div class="google-ads">
                            <img src="assets/images/ads.png" alt="">
                    </div>

                    <!-- side links -->
                    <a class="side-link blue" href="{{Url('newad')}}">
                        هل انت فرد؟
                        <small>الان يمكنك بيع وشراء المنتجات بسهولة</small>
                    </a>

                    <a class="side-link orang" href="{{Url('newad')}}">
                        هل انت شركة؟
                        <small>الان يمكنك بيع وشراء المنتجات بسهولة</small>
                    </a>

                    <!-- search side -->
                    <div class="side-search-box">
                        <form method="GET" action="{{Url('search')}}">
                        <input type="hidden" class="applied-filters" name="applied_filters" value="{{$applied_ret or ''}}">
                        <input type="hidden" name="search_city" value="">
                        <input type="hidden" name="search_query" value="">
                        <input type="hidden" name="cat-id" value="1">
                        <input type="hidden" name="sort" value="">
                        <input type="hidden" placeholder="السعر الاقصي" name="maxi_price" value="{{$request['maxi-price'] or ''}}">
                        <input type="hidden" placeholder="السعر الادني" name="mini_price" value="{{$request['mini-price'] or ''}}">
                        <p>تصفح المنتجات</p>
                        <small>فلتر خاص بتصفح المنتجات</small>
                            <?php $arr = $filters['type']?>
                            @foreach($filters as $key=>$filter)
                                @if($loop->index > 0 && $loop->index < 6 && $key != "type" && $arr[$key] == 1)
                                    <select name="filters[{{$key}}]">
                                        <option>{{$key}}</option>    
                                        @foreach($filter as $val)
                                            <option value="{{$val['name']}}">{{$val['name']}}</option>
                                        @endforeach
                                    </select>
                                @elseif($key != "type" && $arr[$key] == 4)
                                    <select name="filters[{{$key}}]">
                                        <option>{{$key}}</option>    
                                        @foreach($filter as $val)
                                            <option value="{{$val['name']}}">{{$val['name']}}</option>
                                            <?php $ops = explode(',', $val['values'])?>
                                            @foreach($ops as $op)
                                            <option value="{{$op}}">{{$op}}  </option>
                                            @endforeach
                                        @endforeach
                                    </select>
                                @endif
                            @endforeach
                        <input type="submit" value="إبحث">
                        </form>
                    </div>

                </div>

                <div class="clearfix"></div>
            </div>

        </div>

        
    </div>


    <div class="white-wrap">
        <div class="big-container">

            <!-- link filter -->
            <div class="link-filter">
                <h2>تصفح من خلال نوع السياره</h2>
                @foreach($car as $ca)
                <a href="#"><img src="{{asset($ca->icon)}}" alt="{{$ca->name}}"></a>
                @endforeach
                <!-- <a href="#">
                    <img src="{{asset('images/car1.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car2.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car3.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car4.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car5.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car6.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car7.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car8.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car9.jpg')}}"alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/car10.jpg')}}" alt="">
                </a> --> 

            </div>


            <h2>تصفح من خلال نوع الماركات</h2>

            <div class="link-logo">
                @foreach($cars as $ca)
                <a href="#"><img src="{{asset($ca->icon)}}" alt="{{$ca->name}}"></a>
                @endforeach
                <!-- <a href="#">
                    <img src="{{asset('images/cars1.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars2.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars3.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars4.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars5.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars6.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars7.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars8.jpg')}}" alt="">
                </a>
                <a href="#">
                    <img src="{{asset('images/cars9.jpg')}}" alt="">
                </a> -->

            </div>
<!-- 
            <div class="centerd">
            <div class="show-all" data-orignal="شاهد الجميع" data-swap="اخفاء الجميع">شاهد الجميع</div>
            </div>


            <div class="mark-links">
                <div class="row no-margin">
                    
                    <div class="col l3 m4 s2">
                        <h2>أ</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    <div class="col l3 m4 s2">
                        <h2>ب</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    <div class="col l3 m4 s2">
                        <h2>ت</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    <div class="col l3 m4 s2">
                        <h2>ث</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div><div class="clearfix"></div>
                    <div class="col l3 m4 s2">
                        <h2>ج</h2>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    <div class="col l3 m4 s2">
                        <h2>ح</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    <div class="col l3 m4 s2">
                        <h2>خ</h2>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                        <a href="#!">اسم الماركة</a>
                    </div>
                    

                </div>
            </div> -->

        </div>
    </div>

@endsection