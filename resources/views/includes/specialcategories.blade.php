<!-- spical inside -->
<div class="spical-inside">
    <div class="spical-head start {{Request::is('/categories*')?"active":""}}">المنتجات المميزة</div>
    @if(count($specialcategory) > 0)
        @foreach($specialcategory as $special)
                <a href="{{Url('/')}}/categories/{{$special->id}}">{{$special->slug}}</a>
        @endforeach
    @else
    @endif
</div>
