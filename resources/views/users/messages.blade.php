@extends('layouts.user')
@section('content')
<!-- profile -->
<div class="big-container register bottom-100 top-100">

  <div class="profile-tabs">
      <a href="{{route ('ads')}}">إدارة الاعلانات</a>
      <a href="{{route ('messages')}}" class="active">الرسائل</a>
      <a href="{{route ('savedsearch')}}">عمليات بحث محفوظة</a>
      <a href="{{route ('profile')}}">الملف الشخصي</a>
  </div>

  <div class="profile-body">

      <div class="row no-margin table-head">
          <div class="col l1">&nbsp;</div>
          <div class="col l2">المرسل</div>
          <div class="col l5">عنوان الرسالة</div>
          <div class="col l3">تاريخ الارسال</div>
          <div class="col l1">التحكم</div>
      </div>
      <div class="row no-margin table-row">
          <div class="col l1">
              <label class="checkbox blued">
                  <input type="checkbox" name="status"><span></span>
              </label>
          </div>
          <div class="col l2">فلان الفلاني</div>
          <div class="col l5"><a class="modal-open" data-modal-open=".profile-messege">بخصوص المنتجات الخاصة بكم</a></div>
          <div class="col l3">19/6/2017</div>
          <div class="col l1">
              <div class="table-tools">
                  <a href="#!"><i class="fa fa-pencil  modal-open" data-modal-open=".profile-messege"></i></a>
                  <a href="#!"><i class="fa fa-times"></i></a>
              </div>
          </div>
      </div>
      <div class="row no-margin table-row">
          <div class="col l1">
              <label class="checkbox blued">
                  <input type="checkbox" name="status"><span></span>
              </label>
          </div>
          <div class="col l2">فلان الفلاني</div>
          <div class="col l5"><a class="modal-open" data-modal-open=".profile-messege">بخصوص المنتجات الخاصة بكم</a></div>
          <div class="col l3">19/6/2017</div>
          <div class="col l1">
              <div class="table-tools">
                  <a href="#!"><i class="fa fa-pencil  modal-open" data-modal-open=".profile-messege"></i></a>
                  <a href="#!"><i class="fa fa-times"></i></a>
              </div>
          </div>
      </div>
      <div class="row no-margin table-row">
          <div class="col l1">
              <label class="checkbox blued">
                  <input type="checkbox" name="status"><span></span>
              </label>
          </div>
          <div class="col l2">فلان الفلاني</div>
          <div class="col l5"><a class="modal-open" data-modal-open=".profile-messege">بخصوص المنتجات الخاصة بكم</a></div>
          <div class="col l3">19/6/2017</div>
          <div class="col l1">
              <div class="table-tools">
                  <a href="#!"><i class="fa fa-pencil  modal-open" data-modal-open=".profile-messege"></i></a>
                  <a href="#!"><i class="fa fa-times"></i></a>
              </div>
          </div>
      </div>
      <div class="row no-margin table-row">
          <div class="col l1">
              <label class="checkbox blued">
                  <input type="checkbox" name="status"><span></span>
              </label>
          </div>
          <div class="col l2">فلان الفلاني</div>
          <div class="col l5"><a class="modal-open" data-modal-open=".profile-messege">بخصوص المنتجات الخاصة بكم</a></div>
          <div class="col l3">19/6/2017</div>
          <div class="col l1">
              <div class="table-tools">
                  <a href="#!"><i class="fa fa-pencil  modal-open" data-modal-open=".profile-messege"></i></a>
                  <a href="#!"><i class="fa fa-times"></i></a>
              </div>
          </div>
      </div>

      <button class="butn blue mt-25 no-border">حذف المحدد</button>
  </div>



</div>
@endsection
