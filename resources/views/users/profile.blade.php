@extends('layouts.user')
@section('content')
<!-- profile -->
<div class="big-container register bottom-100 top-100">

  <div class="profile-tabs">
      <a href="{{route ('ads')}}">إدارة الاعلانات</a>
      <a href="{{route ('messages')}}">الرسائل</a>
      <a href="{{route ('savedsearch')}}">عمليات بحث محفوظة</a>
      <a href="{{route ('profile')}}" class="active">الملف الشخصي</a>
  </div>

  <div class="profile-body">
    <!-- {!! Form::model($user,['url' => Url('/post'), 'method' => 'POST']) !!} -->
          <div class="row no-margin table-head">
              <div>
                      صورة الملف الشخصي
              </div>
          </div>
          <div class="row no-margin">
          <div class="col l5 mt-15 mb-15">
          <img class="circl" src="{{ asset('front-assets/images/user.jpg')}}" alt="">
          <button class="butn greay gr mt-25 no-border">حذف الصورة</button>
          </div>
          </div>
          <div class="row no-margin table-head">
              <div>
                  تغيير كلمة المرور
              </div>
          </div>
          <div class="row no-margin">
          <div class="col l5 mt-15 mb-15">
          <input type="password" placeholder="كلمة المرور">
          <input type="password" placeholder="اعادة كلمة المرور">
          <button class="the-btn blue no-border">حفظ</button>
          </div>
          </div>
          <div class="row no-margin table-head">
              <div>
                  تغيير البريد الاليكتروني
              </div>
          </div>
          <div class="row no-margin">
          <div class="col l5 mt-15 mb-15">
          <input type="email" placeholder="البريد الاليكتروني">
          <input type="email" placeholder="اعادة البريد الاليكتروني" value="">
          <button class="the-btn blue no-border">حفظ</button>
          </div>
          </div>
      <div class="row no-margin table-head">
              <div>
                  تغيير البيانات الشخصية
              </div>
          </div>
          <div class="row no-margin">
          <div class="col l5 mt-15 mb-15">
          <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
              {!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required', 'placeholder'=>'أسم المستخدم']) !!}
              <small class="text-danger">{{ $errors->first('name') }}</small>
          </div>
          <input type="text" placeholder="رقم الجوال">
          <input type="text" placeholder="العنوان">
          {!! Form::submit("حفظ", ['class' => 'the-btn blue no-border']) !!}
          </div>
          </div>
          {!! Form::close() !!}
  </div>
</div>
@endsection
