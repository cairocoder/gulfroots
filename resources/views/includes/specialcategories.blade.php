<!-- spical cats -->
<!-- <div class="spical-cats white-bg">

    <div class="big-container start {{Request::is('/categories*')?"active":""}}">
        <div class="spical-head">المنتجات المميزة</div>
        @if(count($spechialcategory) > 0)
            @foreach($spechialcategory as $spechial)
                <a href="{{Url('/')}}/categories/{{$spechial->id}}">{{$spechial->slug}}</a>
                @if($spechial->id === 10)
                    @break
                @endif
            @endforeach
        @else
        @endif
    </div>
</div> -->

<!-- spical inside -->
<div class="spical-inside">
    <div class="spical-head start {{Request::is('/categories*')?"active":""}}">المنتجات المميزة</div>
    @if(count($spechialcategory) > 0)
        @foreach($spechialcategory as $spechial)
            <a href="{{Url('/')}}/categories/{{$spechial->id}}">{{$spechial->slug}}</a>
            @if($spechial->id === 10)
                @break
            @endif
        @endforeach
    @else
    @endif
</div>