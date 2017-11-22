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

        <div class="top-25 bottom-25">
            <small class="nc mt-15">اختر القسم الفرعي</small>
        </div>
        <div class="select-box links">
            <!-- dropdown wrapper -->
            <div>
                @if(count($subcategories) > 0)
                    @foreach($subcategories as $subcategory)
                        @if($subcategory->id == $subcategory_id)
                            <i class="{{$subcategory->icon}}"></i>{{$subcategory->name}}
                            <a href="{{Url('newad')}}/{{$category_id}}/"><i class="fa fa-times"></i></a>
                        @endif
                    @endforeach
                @endif
            </div>
        </div>

        <div class="top-25 bottom-25">
            <small class="nc mt-15">حدد وجهتك</small>
        </div>

        <!-- dropdown wrapper -->
        <form role="form" method="POST" action="{{Url('newad')}}">
            {{ csrf_field() }}
            <input type="hidden" name="category_id" value="{{$category_id}}">
            <input type="hidden" name="subcategory_id" value="{{$subcategory_id}}">
            <div class="select-box links">
                <!-- select start  -->
                    <button type="submit" name="SupplyOrDemand" value="Supply"><i></i> للعرض
                    </button>
                <!-- select end  -->

                <!-- select start  -->
                    <button type="submit" name="SupplyOrDemand" value="Demand"><i></i>للطب
                    </button>
                <!-- select end  -->
            </div>
        </form>
    </div>

@endsection
