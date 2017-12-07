@extends('layouts.user')
@section('content')
<div class="big-head top-100 bottom-50 centerd">
        <h1>تم تسجيل الحساب بنجاح</h1>
</div>
  <!-- register -->
  <div class="big-container register bottom-100 centerd">
    <div class="boxed-container">
        <div class="row no-margin top-50 bottom-50">
            <div class="thanks-box">
                شكرا لك علي التسجيل في قلف روتس, تم ارسال رساله تأكيد علي البريد الاليكتروني برجاء المراجعه لتأكيد الحساب الخاص بك.
                <a href="{{route ('landing')}}" class="butn blue">عودة للصفحة الرئيسية</a>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
  </div>
@endsection
