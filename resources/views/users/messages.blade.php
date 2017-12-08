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
        @foreach($inboxes as $inbox)
          <div class="col l1">
              <label class="checkbox blued">
                  <input type="checkbox" name="status"><span></span>
              </label>
          </div>
          <div class="col l2"> {{$inbox->withUser->name}}</div>
          <div class="col l5"><input type="hidden" class="msgs-id" value="{{$inbox->thread->conversation_id}}"><a class="modal-open open-msgs" data-modal-open=".profile-messege">{{$inbox->thread->message}}</a></div>
          <div class="col l3">{{date('d/m/Y', strtotime($inbox->thread->humans_time))}}</div>
          <div class="col l1">
              <div class="table-tools">
                  <a href="#!"><i class="fa fa-times"></i></a>
              </div>
          </div>
          @endforeach
      </div>
      <div>
      <button class="butn blue mt-25 no-border">حذف المحدد</button>
  </div>
</div>
<!-- global overlay -->
<div class="global-overlay"></div>
<div class="my-modal profile-messege">
    <div class="closer"></div>
    <div class="my-modal-body">
        <form role="form" method="POST" action="">
          {!! csrf_field() !!}
            <div class="maseges-container">
            </div>
            <div class="send-bar">
                <textarea name="message-data" id="message-data" class="send-massege" placeholder="اكتب رسالتك"></textarea>
                <input type="hidden" name="_id" value="{{$inbox->withUser->id}}">
                <button class="send-btn" type="submit">ارسال</button>
            </div>
        </form>
    </div>
</div>
@endsection
