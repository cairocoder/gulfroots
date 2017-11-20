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
<i  class="fa fa-map-marker"></i>
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
<div class="spical-head">المنتجات المميزة</div>
<a href="#!">السيارات</a>
<a href="#!">المركبات</a>
<a href="#!">المفروشات</a>
<a href="#!">الاثاث</a>
<a href="#!">الاجهزة اللوحية</a>
<a href="#!">لعب الاطفال</a>
<a href="#!">الايفون</a>
<a href="#!">وظائف</a>
<a href="#!">مخبوزات</a>
<a href="#!">منسقي حفلات</a>
</div>

<!-- link map -->
<div class="link-map">
<div class="map-item"><a href="index.html">الرئيسية</a></div>
<div class="map-item">اسم الصفحة</div>
</div>

<div class="page-container nc">

<h1 class="nb bolded">اسم الصفحة</h1>

<p>
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي 
</p>

<p>
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي 
</p>


<p>
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي 
</p>


<p>
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي 
</p>

<p>
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
نص تجريبي نص تجريبي 
</p>

<p>
    نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
    نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
    نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
    نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي 
    نص تجريبي نص تجريبي 
</p>
</div>
</div>
</div>
@endsection