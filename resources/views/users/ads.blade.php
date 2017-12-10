@extends('layouts.user')
@section('content')
<!-- profile -->
<div class="big-container register bottom-100 top-100">

    <div class="profile-tabs">
        <a href="{{route ('ads')}}" class="active">إدارة الاعلانات</a>
        <a href="{{route ('messages')}}">الرسائل</a>
        <a href="{{route ('savedsearch')}}">عمليات بحث محفوظة</a>
        <a href="{{route ('profile')}}">الملف الشخصي</a>
    </div>

    <div class="profile-body">

        <div class="profile-posts-tabs">
            <div class="profile-posts-tab active" data-tab-target=".all-ads">
                كل الاعلانات ({{count($posts)}})
            </div>
            <div class="profile-posts-tab" data-tab-target=".now-ads">
                اعلانات حالية (2)
            </div>
            <div class="profile-posts-tab" data-tab-target=".ex-ads">
                اعلانات منتهيه (0)
            </div>
            <div class="profile-posts-tab" data-tab-target=".spam-ads">
                اعلانات موقوفة (0)
            </div>
            <div class="profile-posts-tab" data-tab-target=".hol-ads">
                الرغبات ({{count($favorites)}})
            </div>
        </div>

        <div class="profile-screens">

            <div class="boxed-ads in-profile all-ads active">
                @foreach($posts as $post)
                    <!-- ad item -->
                    <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                        <div class="image-box">
                            <img src="{{$post->img}}" alt="">
                            <div class="price">{{$post->price}}
                                <span>ر.س</span>
                            </div>
                        </div>
                        <h1 title="سيارة بمواصفات خاصة">{{$post->title}}</h1>
                        <small>مدينة الرياض</small>
                        <div class="post-tools">
                                    <i class="fa fa-pencil"></i>
                                    <i class="fa fa-times"></i>
                        </div>
                    </a>
                @endforeach
            </div>

            <div class="boxed-ads in-profile now-ads">
                @foreach($posts as $post)
                    @if($post->isArchived == 0 and $post->isApproved == 1)
                    <!-- ad item -->
                    <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                        <div class="image-box">
                            <img src="{{$post->img}}" alt="">
                            <div class="price">{{$post->price}}
                                <span>ر.س</span>
                            </div>
                        </div>
                        <h1 title="سيارة بمواصفات خاصة">{{$post->title}}</h1>
                        <small>مدينة الرياض</small>
                        <div class="post-tools">
                                    <i class="fa fa-pencil"></i>
                                    <i class="fa fa-times"></i>
                        </div>
                    </a>
                    @endif
                @endforeach

            </div>

            <div class="boxed-ads no-data in-profile ex-ads">
                    @foreach($posts as $post)
                        @if($post->isArchived == 1)
                        <!-- ad item -->
                        <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                            <div class="image-box">
                                <img src="{{$post->img}}" alt="">
                                <div class="price">{{$post->price}}
                                    <span>ر.س</span>
                                </div>
                            </div>
                            <h1 title="سيارة بمواصفات خاصة">{{$post->title}}</h1>
                            <small>مدينة الرياض</small>
                            <div class="post-tools">
                                        <i class="fa fa-pencil"></i>
                                        <i class="fa fa-times"></i>
                            </div>
                        </a>
                        @endif
                    @endforeach
                        <div class="centerd">
                                <h2>لاتوجد اعلانات منتهيه</h2>
                        </div>
            </div>
            <div class="boxed-ads no-data in-profile spam-ads">
                    @foreach($posts as $post)
                        @if($post->isApproved == 0)
                        <!-- ad item -->
                        <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                            <div class="image-box">
                                <img src="{{$post->img}}" alt="">
                                <div class="price">{{$post->price}}
                                    <span>ر.س</span>
                                </div>
                            </div>
                            <h1 title="سيارة بمواصفات خاصة">{{$post->title}}</h1>
                            <small>مدينة الرياض</small>
                            <div class="post-tools">
                                        <i class="fa fa-pencil"></i>
                                        <i class="fa fa-times"></i>
                            </div>
                        </a>
                        @endif
                    @endforeach
                        <div class="centerd">
                                <h2>لاتوجد اعلانات منتهيه</h2>
                        </div>
            </div>

            <div class="boxed-ads in-profile hol-ads">
                @foreach($favorites as $post)
                    <!-- ad item -->
                    <a href="{{Url('posts').'/'.$post->id}}" class="ad-item">
                        <div class="image-box">
                            <img src="{{$post->img}}" alt="">
                            <div class="price">{{$post->price}}
                                <span>ر.س</span>
                            </div>
                        </div>
                        <h1 title="سيارة بمواصفات خاصة">{{$post->title}}</h1>
                        <small>مدينة الرياض</small>
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
                @endforeach
            </div>

        </div>

    </div>

</div>
@endsection
