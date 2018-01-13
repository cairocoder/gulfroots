@if(count($parents) == 1)
    <?php $tmp = 'layouts.app' ?>
@else
    <?php $tmp = 'layouts.user' ?>
@endif
@extends($tmp)
@section('title', ' - ' . $category->name_ar)
@section('content')
    @if(count($parents) == 1)
        <div class="cat-banner" style="background-image:url('{{ asset($parents[0]['photo'])}}')">
            <h1>{{$parents[0]['name_ar']}}</h1>
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
                @include('sidebars.category')
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