@extends('layouts.app')
@section('title', ' - ' . $category->name_ar)
@section('content')
    @if($category->parent_id == null)
    <div class="cat-banner" style="background-image:url('{{ asset($category->photo)}}')">
        <h1>{{$category->name_ar}}</h1>
    </div>
    @endif
    
    <!--  script -->
    <script id="privet-filters" type="application/json">{!! json_encode($filters, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_FORCE_OBJECT) !!}</script>
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
                <div class="col l3">
                    <!-- side filters start -->
                    <div class="side-filters">
                        <h2>تصفية النتائج</h2>
                        <div class="side-filter-level1 active">
                            @foreach($parents as $key=>$cat)
                                <div class="filter-title active">
                                    <span>{{$cat['name_ar']}}</span>
                                    <i class="fa fa-caret-down"></i>
                                </div>
                            @if($key == count($parents) - 1)
                                <ul div class="filter-level1-data active">
                                    <li><a href="{{ Url('categories/'.$cat['id']) }}" class="active">جميع الاقسام</a></li>
                                    @foreach($cat['subcategories'] as $category)
                                        @if($category['parent_id'] == $cat['id'])
                                            <li><a href="{{ Url('categories/'.$category['id']) }}">{{$category['name_ar']}}</a></li>
                                        @endif
                                    @endforeach
                                </ul>                            
                            @else
                                <ul div class="filter-level1-data active">
                                    <li><a href="{{ Url('categories/'.$cat['id']) }}">جميع الاقسام</a></li>
                                </ul>
                            @endif
                            @endforeach
                        </div>
                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>حسب السعر</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li>
                                    <form>
                                        <input type="text" placeholder="السعر الادني" id="mini">
                                        <input type="text" placeholder="السعر الاقصي" id="maxi">
                                        <input type="submit" value="تصفية" onclick="document.getElementById('maxi_price').value=document.getElementById('maxi').value;
                                        document.getElementById('maxi_price').value=document.getElementById('maxi').value;
                                        document.getElementById('form1').submit();">
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع الاعلان</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="filter-level1-data active">
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
                                <span>نوع البيع</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="filter-level1-data active">
                                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                                <li><a href="#!">عرض</a></li>
                                <li><a href="#!">طلب</a></li>
                            </ul>
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع العرض</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="filter-level1-data active">
                                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                                <li><a href="#!">قابل للتفاوض</a></li>
                                <li><a href="#!">نهائي</a></li>
                            </ul>
                        </div>
                        <div class="google-ads">
                            <img src="{{ asset('images/ads.png')}}" alt="">
                        </div>
                        <div class="google-ads">
                            <img src="{{ asset('images/ads.png')}}" alt="">
                        </div>
                    </div>
                    <!-- side filters end -->
                </div>
                <div class="col l9">
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
                                        <h1 title="{{$post->title}}">{{$post->title}}</h1>
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
                            <div class="centerd top-50 bottom-50">
                            {{$posts->links()}}
                                <a href="#!" class="butn blue">شاهد الجميع</a>
                            </div>
                        </div>
                        <div class="centerd">
                        <img src="assets/images/width-ads.jpg" alt="">
                </div>


                @guest
                @else
                <div class="strip-head on-top">
                    <div class="mini-tabs">
                        <div class="tab-button active" data-tab-btn=".m25ran">شوهد مؤخرا</div>
                        <div class="tab-button" data-tab-btn=".tamany">قائمة التمني</div>
                        <div class="tab-button" data-tab-btn=".ma7foz">بحث محفوظ</div>
                    </div>
                </div>
                <div class="tabs-body">

                    @include('includes.lastseenslider')

                    @include('includes.favoriteslider')

                    @include('includes.savedsearchslider')

                </div>
                @endguest


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