<!-- spical inside -->
<div class="spical-inside">
    <div class="spical-head start {{Request::is('/categories*')?"active":""}}">المنتجات المميزة</div>
    @if(count($specialcategories) > 0)
        @foreach($specialcategories as $special)
                <a href="{{Url('/')}}/categories/{{$special['id']}}">{{$special['name_ar']}}</a>
        @endforeach
    @else
    @endif
</div>
