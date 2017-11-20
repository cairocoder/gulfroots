@extends('layouts.user')
@section('content')
<div class="big-head top-100 bottom-50 centerd">
      <h1>انشر اعلانك</h1>
      <small class="nc mt-15">اختر قسم الاعلان</small>
</div>

<!-- register -->
<div class="big-container bottom-100 centerd">

                <!-- dropdown wrapper -->
                <div class="select-box links">
                  @if(count($categories) > 0)
                      @foreach($categories as $category)
                          <a href="{{Url('/')}}/categories/{{$category->id}}">{{$category->name}}</a>
                      @endforeach
                  @else
                  @endif
                </div>
              <!-- select dropdown end -->
</div>
@endsection
