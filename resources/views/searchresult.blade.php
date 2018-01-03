@extends('layouts.user')
@section('title', 'نتائج البحث')
@section('content')
    <!-- normal body -->
    <div class="normal-body">

        <div class="big-container">

            <!-- filter start -->
            <div class="main-filter">
                <form method="GET" class="search" action="{{Url('search')}}" id="form1">
                {{ csrf_field() }}
                <input type="hidden" class="applied-filters" name="applied_filters" value="{{$_REQUEST['applied_filters'] or ''}}">
                <input type="hidden" class="mini_price" id="mini_price" name="mini_price" value="{{$_REQUEST['mini_price'] or ''}}">
                <input type="hidden" class="maxi_price" id="maxi_price" name="maxi_price" value="{{$_REQUEST['maxi_price'] or ''}}">
                <input type="hidden" class="sort" id="sort" name="sort" value="{{$_REQUEST['sort'] or ''}}">
                <!-- select dropdown start -->
                <div class="select-cat">
                    <!-- hidden input to catch the id -->
                    <input id="cat-id" type="text" name="cat-id" value="{{$_REQUEST['cat-id']}}" hidden>
                    <!-- select icon in the search bar -->
                    <div class="select-head">
                        <div class="select-icon">
                            <i class="fa fa-{{$parents[0]['icon'] or 'bars'}}"></i>
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
                        @foreach($categories as $category)
                            <!-- select group level 1 start  -->
                            <div class="select-group" data-cat-icon="{{$category['icon']}}" data-cat-id="{{$category['id']}}">
                                <i class="fa fa-{{$category['icon']}}"></i> {{$category['name_ar']}}
                                @foreach($category['subcategories'] as $subcat)
                                    @if($subcat['parent_id'] == $category['id'])
                                    <div class="group-toggle"><i class="fa fa-caret-down"></i></div>
                                    <!-- select group level 2 start  -->
                                    <div class="group-box">
                                        <!-- group item -->
                                        <div class="select-item-level1" data-cat-id="{{$subcat['id']}}">
                                            {{$subcat['name_ar']}}
                                            @foreach($subcat['subcategories'] as $subOfsubcat)
                                                @if($subcat['id'] == $subOfsubcat['parent_id'])
                                                <div class="group-toggle"><i class="fa fa-caret-down"></i></div>
                                                <!-- select group level 3 start  -->
                                                <div class="group-box2">
                                                    <!-- group item -->
                                                    <div class="select-item-level2" data-cat-id="{{$subOfsubcat['id']}}">
                                                        {{$subOfsubcat['name_ar']}}
                                                    </div>
                                                </div>
                                                <!-- select group level 3 end  -->
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                    <!-- select group level 2 end  -->
                                    @endif
                                @endforeach
                            </div>
                            <!-- select group level 1 end  -->
                        @endforeach
                            <!-- select group level 1 end  -->
                    </div>
                </div>
                <!-- select dropdown end -->

                <!-- search bar -->
                <div class="main-search">
                    <input type="text" placeholder="ابحث عن ..." value="{{$_REQUEST['search_query']}}" name="search_query">
                </div>

                <!-- city box -->
                <div class="city-box">
                    <div class="city-form">
                    <i  class="fa fa-map-marker"></i>
                    <input type="text" placeholder="المدينة" value="{{$_REQUEST['search_city']}}" name="search_city">
                    <select name="search_distance" onchange="document.getElementById('form1').submit();">
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

            @include('includes.specialcategories')

            <!-- link map -->
            <div class="link-map">
                <div class="map-item"><a href="index.html">الرئيسية</a></div>
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
                        @if(count($parents) > 0)
                            @foreach($parents as $cat)
                                <div class="filter-title active">
                                    <span>{{$cat['name_ar']}}</span>
                                    <i class="fa fa-caret-down"></i>
                                </div>
                            @if($loop->last)
                                <ul div class="filter-level1-data active">
                                    <li><a href="" class="active" onclick="document.getElementById('form1').submit();">جميع الاقسام</a></li>
                                    @foreach($cat['subcategories'] as $ca)
                                    <li><a id="abdallah" href="" class="" onclick="document.getElementById('cat-id').value={{$ca['id']}};document.getElementById('form1').submit();">{{$ca['name_ar']}}</a></li>
                                    @endforeach
                                </ul>                            
                            @else
                                <ul div class="filter-level1-data active">
                                    <li><a href="" onclick="document.getElementById('cat-id').value={{$cat['id']}};document.getElementById('form1').submit();">جميع الاقسام</a></li>
                                </ul>
                            @endif
                            @endforeach
                        @endif
                        </div>


                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>حسب السعر</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul div class="filter-level1-data active">
                                <li>
                                    <form id="abdallah">
                                        <input type="text" placeholder="السعر الادني" value="{{$_REQUEST['mini_price'] or ''}}" id="mini">
                                        <input type="text" placeholder="السعر الاقصي" value="{{$_REQUEST['maxi_price'] or ''}}" id="maxi">
                                        <input type="submit" value="تصفية" onclick="document.getElementById('mini_price').value=document.getElementById('mini').value;
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

                        <div class="side-filter-level1 active">
                            <div class="filter-title active">
                                <span>نوع الحالة</span>
                                <i class="fa fa-caret-down"></i>
                            </div>
                            <ul class="filter-level1-data active">
                                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                                <li><a href="#!">جديد</a></li>
                                <li><a href="#!">مستعمل</a></li>
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
                                <select onchange="document.getElementById('sort').value=this.value;document.getElementById('form1').submit();">
                                    <option value="0">الاكثر تشابه</option>
                                    <option value="1"{{ (isset($_REQUEST['sort']) and $_REQUEST['sort'] == 1) ? 'selected' : ''}}>الاحدث اولا</option>
                                    <option value="2"{{ (isset($_REQUEST['sort']) and $_REQUEST['sort'] == 2) ? 'selected' : ''}}>الاقل سعر</option>
                                    <option value="3"{{ (isset($_REQUEST['sort']) and $_REQUEST['sort'] == 3) ? 'selected' : ''}}>الاعلي سعر</option>
                                </select>
                            </div>
                        </div>

                        <div class="centerd">
                            <img src="assets/images/width-ads.jpg" alt="">
                        </div>
                        @if(count($top) > 0)
                        <div class="strip-head blue on-top">افضل الاعلانات</div>

                        <div class="row no-margin ads-list">
                            @foreach($top as $post)
                                <div class="col l4">
                                    <!-- ad item -->
                                    @if($post['isColored'])
                                        <a href="{{Url('posts').'/'.$post['id']}}" class="ad-item heigh-light">
                                    @else
                                        <a href="{{Url('posts').'/'.$post['id']}}" class="ad-item">
                                    @endif
                                    @if($post['isUrgent'])
                                        <div class="important"><span></span><div>عاجل</div></div>
                                    @endif
                                        <div class="image-box">
                                            <img src="{{$post['img']}}" alt="">
                                            <div class="price boxed-only">{{$post['price']}}
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="{{$post['title']}}" class="boxed-only">{{$post['title']}} </h1>
                                        <div class="post-data normal-only">
                                            <h1 title="{{$post['title']}}">
                                            {{$post['title']}} 
                                            </h1>
                                            <div class="price">{{$post['price']}}
                                                <span>ر.س</span>
                                            </div>
                                            <div class="desc">
                                                {{$post['description']}}
                                            </div>
                                        </div>
                                        <small class="boxed-only">{{$post['city']}}</small>
                                        <div class="info normal-only">
                                            <h3>{{$post['country']}}
                                                <small>{{$post['city']}}</small>
                                            </h3>
                                            <div class="time"> {{  strftime("%b %d %Y",strtotime($post['created_at']))}}</div>
                                        </div>
                                        @if($post['liked'] == 1)
                                            <div class="watch-icon active">
                                        @else
                                            <div class="watch-icon">
                                        @endif
                                            <input type="hidden" name="liked" class="liked" value="{{$post['liked']}}">
                                            <input type="hidden" name="post_id" class="post_id" value="{{$post['id']}}">
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </a>
                                </div>
                                @endforeach
                        </div>
                        @endif
                        @if(count($posts) > 0)
                        <div class="strip-head on-top">احدث الاعلانات</div>

                        <div class="row no-margin ads-list">
                            
                                @foreach($posts as $post)
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
                                            <img src="{{$post->img}}" alt="">
                                            <div class="price boxed-only">{{$post->price}}
                                                <span>ر.س</span>
                                            </div>
                                        </div>
                                        <h1 title="{{$post->title}}" class="boxed-only">{{$post->title}} </h1>
                                        <div class="post-data normal-only">
                                            <h1 title="{{$post->title}}">
                                            {{$post->title}} 
                                            </h1>
                                            <div class="price">{{$post->price}}
                                                <span>ر.س</span>
                                            </div>
                                            <div class="desc">
                                                {{$post->description}}
                                            </div>
                                        </div>
                                        <small class="boxed-only">مدينة {{$post->city}}</small>
                                        <div class="info normal-only">
                                            <h3>{{$post->country}}
                                                <small>{{$post->city}}</small>
                                            </h3>
                                            <div class="time"> {{  strftime("%b %d %Y",strtotime($post->created_at))}}</div>
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
                        </div>
                            @elseif(count($top) == 0)
                            <div class="centerd">
                                <h2>No Search Results</h2>
                            </div>
                            @endif
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