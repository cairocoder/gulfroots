<!-- filter start -->
<div class="main-filter">
    <form method="GET" action="{{Url('search')}}" id="form1">
    {{ csrf_field() }}
    <input type="hidden" class="applied-filters" name="applied_filters" value="{{$applied_ret or ''}}">
    <input type="hidden" class="mini_price" id="mini_price" name="mini_price" value="{{$request['mini_price'] or ''}}">
    <input type="hidden" class="maxi_price" id="maxi_price" name="maxi_price" value="{{$request['maxi_price'] or ''}}">
    <input type="hidden" class="sort" id="sort" name="sort" value="{{$request['sort'] or ''}}">
        <!-- select dropdown start -->
    <div class="select-cat">
        <!-- hidden input to catch the id -->
        <input id="cat-id" type="text" name="cat-id" value="{{(isset($parents) and $parents[count($parents) - 1]['id']) or 0}}" hidden>
        <!-- select icon in the search bar -->
        <div class="select-head">
            <div class="select-icon">
                <i class="fa fa-{{$parents[0]['icon'] or 'bars'}}"></i>
            </div>
            <i class="fa fa-caret-down"></i>
        </div>
        <!-- dropdown wrapper -->
        <div class="select-box">
            <!-- select all cats -->
            <div class="select-group" data-cat-icon="bars" data-cat-id="0">
                    <i class="fa fa-bars"></i> جميع الاقسام
            </div>

            <!-- select group level 1 start  -->
            @foreach($categories as $category)
                <!-- select group level 1 start  -->
                <div class="select-group" data-cat-icon="{{$category['icon']}}" data-cat-id="{{$category['id']}}">
                    <i class="fa fa-{{$category['icon']}}"></i> {{$category['name_ar']}}
                    @foreach($category['subcategories'] as $subcat)
                        @if($subcat['parent_id'] == $category['id'])
                        <div class="group-toggle"><i class="fa fa-caret-down"></i></div>
                        <!-- select group level 2 start  -->
                        <div class="group-box">
                            <!-- group item -->
                            <div class="select-item-level1" data-cat-id="{{$subcat['id']}}">
                                {{$subcat['name_ar']}}
                                @foreach($subcat['subcategories'] as $subOfsubcat)
                                    @if($subcat['id'] == $subOfsubcat['parent_id'])
                                    <div class="group-toggle"><i class="fa fa-caret-down"></i></div>
                                    <!-- select group level 3 start  -->
                                    <div class="group-box2">
                                        <!-- group item -->
                                        <div class="select-item-level2" data-cat-id="{{$subOfsubcat['id']}}">
                                            {{$subOfsubcat['name_ar']}}
                                        </div>
                                    </div>
                                    <!-- select group level 3 end  -->
                                    @endif
                                @endforeach
                            </div>
                        </div>
                        <!-- select group level 2 end  -->
                        @endif
                    @endforeach
                </div>
                <!-- select group level 1 end  -->
            @endforeach
                <!-- select group level 1 end  -->
        </div>
    </div>
    <!-- select dropdown end -->

    <!-- search bar -->
    <div class="main-search">
        <input type="text" placeholder="" name="search_query">
    </div>

    <!-- city box -->
    <div class="city-box">
        <div class="city-form">
        <i  class="fa fa-map-marker"></i>
        <input type="text" placeholder="المدينة" name="search_city">
        <select name="search_distance">
            <option selected>0 كم</option>
            <option>5 كم</option>
            <option>10 كم</option>
            <option>20 كم</option>
            <option>40 كم</option>
            <option>80 كم</option>
            <option>100 كم</option>
        </select>
        </div>
    </div>

    <!-- submit -->
    <input type="submit" value="إبحث">
    </form>
</div>
<!-- filter end -->