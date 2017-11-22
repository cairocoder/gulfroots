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
              كل الاعلانات (3)
          </div>
          <div class="profile-posts-tab" data-tab-target=".now-ads">
              اعلانات حالية (2)
          </div>
          <div class="profile-posts-tab" data-tab-target=".ex-ads">
              اعلانات منتهيه (0)
          </div>
          <div class="profile-posts-tab" data-tab-target=".hol-ads">
              اعلانات في انتظار الموافقة (1)
          </div>
      </div>

      <div class="profile-screens">

      <div class="boxed-ads in-profile all-ads active">


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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>
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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>
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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>



      </div>


      <div class="boxed-ads in-profile now-ads">


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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>
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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>



      </div>


      <div class="boxed-ads no-data in-profile ex-ads">


                  <div class="centerd">
                          <h2>لاتوجد اعلانات منتهيه</h2>
                  </div>



      </div>


      <div class="boxed-ads in-profile hol-ads">


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
                      <div class="post-tools">
                                  <i class="fa fa-pencil"></i>
                                  <i class="fa fa-times"></i>
                      </div>
                  </a>


      </div>

      </div>

  </div>



</div>
@endsection
