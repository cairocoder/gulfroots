@extends('layouts.user')
@section('content')
    <div class="big-head top-100 bottom-50 centerd">
        <h1>انشر اعلانك</h1>
        <small class="nc mt-15">اختر قسم الاعلان</small>
    </div>

    <!-- register -->
    <div class="big-container bottom-100 centerd">

        <!-- dropdown wrapper -->
        <div class="select-box links get-back">

            <!-- select group level 1 start  -->
            <div>
                @if(count($categories) > 0)
                    @foreach($categories as $category)
                        @if($category->id == $category_id)
                            <i class="{{$category->icon}}"></i> {{$category->name}}
                            <a href="{{Url('newad')}}"><i class="fa fa-times"></i></a>
                        @endif
                    @endforeach
                @endif
            </div>
            <!-- select group level 1 end  -->

        </div>
    </div>

    <div class="big-container bottom-100 centerd">
        <div class="top-25 bottom-25">
            <small class="nc mt-15">اختر القسم الفرعي</small>
        </div>
        <div class="select-box links">
            <!-- dropdown wrapper -->
                @if(count($subcategories) > 0)
                    @foreach($subcategories as $subcategory)
                        @if($subcategory->sub_id == $category_id)
                            <a href="{{Url('newad')}}/{{$category_id}}/{{$subcategory->id}}">
                                <i class="{{$subcategory->icon}}"></i>{{$subcategory->name}}
                            </a>
                        @endif
                    @endforeach
                @endif
        </div>

    </div>

@endsection
