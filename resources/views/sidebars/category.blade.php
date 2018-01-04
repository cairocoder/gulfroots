<div class="col l3">
    <!-- side filters start -->
    <div class="side-filters">
        <h2>تصفية النتائج</h2>
        <div class="side-filter-level1 active">
            @foreach($parents as $cat)
                <div class="filter-title active">
                    <span>{{$cat['name_ar']}}</span>
                    <i class="fa fa-caret-down"></i>
                </div>
            @if($loop->index == count($parents) - 1)
                <ul div class="filter-level1-data active">
                    <li><a href="{{ Url('categories/'.$cat['id']) }}" class="active">جميع الاقسام</a></li>
                    @foreach($cat['subcategories'] as $category)
                        @if($category['parent_id'] == $cat['id'])
                            <li><a href="{{ Url('categories/'.$category['id']) }}">{{$category['name_ar']}}</a></li>
                        @endif
                    @endforeach
                </ul>                            
            @else
                <ul div class="filter-level1-data active">
                    <li><a href="{{ Url('categories/'.$cat['id']) }}">جميع الاقسام</a></li>
                </ul>
            @endif
            @endforeach
        </div>
        <div class="side-filter-level1 active">
            <div class="filter-title active">
                <span>حسب السعر</span>
                <i class="fa fa-caret-down"></i>
            </div>
            <ul div class="filter-level1-data active">
                <li>
                    <form>
                        <input type="text" placeholder="السعر الادني" id="mini">
                        <input type="text" placeholder="السعر الاقصي" id="maxi">
                        <input type="submit" value="تصفية" onclick="document.getElementById('maxi_price').value=document.getElementById('maxi').value;
                        document.getElementById('maxi_price').value=document.getElementById('maxi').value;
                        document.getElementById('form1').submit();">
                    </form>
                </li>
            </ul>
        </div>
        <div class="side-filter-level1 active">
            <div class="filter-title active">
                <span>نوع الاعلان</span>
                <i class="fa fa-caret-down"></i>
            </div>
            <ul class="filter-level1-data active">
                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                <li><a href="#!">اعلانات مدفوعة عادية</a></li>
                <li><a href="#!">اعلانات مدفوعة مميزة</a></li>
                <li><a href="#!">اعلانات مدفوعة عاجلة</a></li>
                <li><a href="#!">اعلانات مدفوعة ملونة</a></li>
                <li><a href="#!">افضل الاعلانات</a></li>
            </ul>
        </div>
        
        @foreach($filters as $name=>$values)
            @if($name != 'type')
            <div class="side-filter-level1 active">
                <div class="filter-title active">
                    <span>{{$name}}</span>
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="filter-level1-data active">
                    <li>
                        @foreach($values as $value)
                        <li><a href="#!">{{$value['name']}}</a></li>
                        @endforeach
                    </li>
                </ul>
            </div>
            @endif
        @endforeach

        <div class="side-filter-level1 active">
            <div class="filter-title active">
                <span>نوع البيع</span>
                <i class="fa fa-caret-down"></i>
            </div>
            <ul class="filter-level1-data active">
                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                <li><a href="#!">عرض</a></li>
                <li><a href="#!">طلب</a></li>
            </ul>
        </div>


        <div class="side-filter-level1 active">
            <div class="filter-title active">
                <span>نوع العرض</span>
                <i class="fa fa-caret-down"></i>
            </div>
            <ul class="filter-level1-data active">
                <li><a href="#!" class="active">جميع الاعلانات</a></li>
                <li><a href="#!">قابل للتفاوض</a></li>
                <li><a href="#!">نهائي</a></li>
            </ul>
        </div>
        <div class="google-ads">
            <img src="{{ asset('images/ads.png')}}" alt="">
        </div>
        <div class="google-ads">
            <img src="{{ asset('images/ads.png')}}" alt="">
        </div>
    </div>
    <!-- side filters end -->
</div>