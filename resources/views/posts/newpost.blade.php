@extends('layouts.user')
@section('content')
    <div class="big-head top-100 bottom-50 centerd">
        <h1 class="gray">انشر اعلانك</h1>
        <small class="nc mt-15">اختر باقة الاعلان</small>
    </div>

    <!-- register -->
    <div class="big-container bottom-100">
        <form method="POST" action="{{Url('/newpost')}}" enctype="multipart/form-data">
            {{ csrf_field() }}
            <input type="hidden" name="subcategory_id" value="{{$subcategory_id}}">
            <div class="row no-margin centerd">
                @if(Auth::user()->isCommercial() == false)
                    @include('includes.packages')
                @else
                    <input type="hidden" name="pack" value="4" class="o-extra3">
                @endif
                <div class="clearfix"></div>
            </div>

            <div class="nc top-25 bottom-25">
                سوف يستمر الاعلان الخاص بك حتي 30 يوم من تاريخ النشر
            </div>

            <div class="strip-head blue to-back">تفاصيل الاعلان</div>
            <div class="to-back-body ad-check">
                <div class="row no-margin borderd">
                    <div class="col l6">
                        <div class="top-group">
                        <input type="text"  name="price" class="in-mini" placeholder="السعر">
                        <label class="checkbox blued">
                                <input type="radio" name="filter[price]" value="محدد"><span></span> محدد
                        </label>
                        <label class="checkbox blued">
                                <input type="radio" class="show-price" name="filter[price]" value="قابل للتفاوض"><span></span> قابل للتفاوض
                        </label>
                        <label class="checkbox blued">
                                <input type="radio" name="filter[price]" value="مجانا"><span></span> مجانا
                        </label>
                        <label class="checkbox blued">
                                <input type="radio" name="filter[price]" value="تبادل"><span></span> تبادل
                        </label>
                        <div class="price-hidden">
                            هل تريد وضع حد ادني للتفاوض؟    &nbsp;
                            <input type="text"  class="in-mini" placeholder="ريال سعودي">
                        </div>
                        </div>
                        <div>
                            الحالة :  &nbsp;
                            <label class="checkbox blued">
                                    <input type="radio" name="filter[status]" value="جديد"><span></span> جديد
                            </label>
                            <label class="checkbox blued">
                                    <input type="radio" name="filter[status]" value="مستعمل"><span></span> مستعمل
                            </label>
                        </div>
                        <div class="row no-margin borderd">
                            <div class="col l8">
                                <br>
                            </div>
                        </div>
                        <br>
                        <?php $arr = $filters['type']?>
                        @foreach($filters as $key=>$filter)
                            @if($key != "type" && $arr[$key] == 1)
                                <select name="filters[{{$key}}]" class="s-select xlarge">
                                    <option>{{$key}}</option>    
                                    @foreach($filter as $val)
                                        <option value="{{$val['name']}}">{{$val['name']}}</option>
                                    @endforeach
                                </select>
                            @elseif($key != "type" && $arr[$key] == 2)
                                {{$key}} : &nbsp;
                                    @foreach($filter as $val)
                                    <label class="checkbox blued">
                                        <input type="checkbox" name="filters[{{$key}}]" value="{{$val['name']}}"><span></span> {{$val['name']}}
                                    </label>
                                    @endforeach
                            @elseif($key != "type" && $arr[$key] == 3)
                                    <input type="text" name="filters[{{$key}}]" placeholder="{{$key}}" class="xlarge">
                            @elseif($key != "type" && $arr[$key] == 4)
                                <select name="filters[{{$key}}]" class="s-select xlarge">
                                    <option>{{$key}}</option>    
                                    @foreach($filter as $val)
                                        <option value="{{$val['name']}}">{{$val['name']}}</option>
                                        <?php $ops = explode(',', $val['values'])?>
                                        @foreach($ops as $op)
                                        <option value="{{$op}}">{{$op}}  </option>
                                        @endforeach
                                    @endforeach
                                </select>
                            @elseif($key != "type" && $arr[$key] == 5)
                                {{$key}} :
                                    @foreach($filter as $val)
                                    <label class="checkbox blued">
                                        <input type="radio" name="filters[{{$key}}]" value="{{$val['name']}}"><span></span> {{$val['name']}}
                                    </label>
                                    @endforeach
                            @endif
                            <br><br>
                        @endforeach
                    </div>
                    <div class="clearfix"></div>
                </div>

                <div class="row no-margin">
                    <div class="col l6">
                        <br>
                        <input type="text" name="short_des" placeholder="عنوان">
                        <input type="text" name="short_des" placeholder="وصف مختصر للاعلان">
                        <textarea name="long_des" placeholder="وصف الاعلان"></textarea>
                        <div class="pay-box not-payed">
                            <img src="{{ asset('front-assets/images/urgant.jpg')}}" alt="">
                            <div class="pay-text">
                                <h3>علامة عاجل <span>20 ريال</span></h3>
                                <p>
                                    اختر اضافة علامة عاجل ليظهر الاعلان الخاص بك بشكل اكثر تميزا وبطريقة تجذب
                                    الانتباه </p>
                            </div>
                            <div class="pay-select">
                                <input type="checkbox" name="isBreaking">
                                <div class="pay-btn">اضافة</div>
                            </div>
                        </div>

                    </div>
                    <div class="col l6">
                        <br>
                        <div class="note">
                            <img src="{{ asset('front-assets/images/info.jpg')}}" alt="">
                            تأكد من ادخال عنوان ووصف الاعلان بشكل واضح ومميز واحرص ان يكون الوصف مفصلا واضحا بكل تفاصيل
                            المنتج
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>


            <div class="strip-head blue to-back">بيانات البائع</div>
            <div class="to-back-body">
                <div class="row no-margin">
                    <div class="col l6">
                        <input type="text" name="seller_name" placeholder="اسم البائع*">
                        {{--<input type="email" placeholder="البريد الاليكتروني*">--}}
                        <input type="text" name="seller_contact_no" placeholder="رقم الاتصال">
                        <input class="my-lat" type="hidden">
                        <input class="my-long" type="hidden">
                        <div class="input-wrap">
                            <input type="text" name="detailed_address" placeholder="العنوان*">
                            <a href="#!" class="get-location"><i class="fa fa-map-marker"></i>تحديد الموقع الجغرافي</a>
                        </div>
                    </div>
                    <div class="col l6">
                        <div class="note">
                            <img src="{{ asset('front-assets/images/info.jpg')}}" alt="">
                            تأكد من ادخال جميع البيانات بشكل صحيح واضافة بيانات الاتصال بشكل واضح ومفصل ذلك سوف يساعد
                            ويسهل
                            التواصل بين عملائك
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>

            @include('includes.uploadrepeater')

            <div class="strip-head blue to-back">انهاء الاعلان</div>
            <div class="to-back-body">
                <div class="row no-margin">
                    <div class="col l6">

                        @if(Auth::user()->isCommercial() == false)
                        <div class="pay-box not-payed extra1">
                            <img src="{{ asset('front-assets/images/extra1.jpg')}}" alt="">
                            <div class="pay-text">
                                <h3>لون مميز
                                    <select name="isColored">
                                        <option value="7">7 ايام (10) ريال</option>
                                        <option value="14">14 ايام (18) ريال</option>
                                        <option value="21">21 ايام (25) ريال</option>
                                    </select>
                                </h3>
                                <p>
                                    ميز اعلانك بلون مميز يختلف عن باقي الاعلانات ليظهر بشكل جذاب ويلفت الانتباه
                                </p>
                            </div>
                            <div class="pay-select">
                                <input type="checkbox" name="isColoredDecision">
                                <div class="pay-btn">اضافة</div>
                            </div>
                        </div>

                        <div class="pay-box not-payed extra2">
                            <img src="{{ asset('front-assets/images/extra2.jpg')}}" alt="">
                            <div class="pay-text">
                                <h3>عرض في الرئيسية
                                    <select name="isinMain">
                                        <option value="7">7 ايام (10) ريال</option>
                                        <option value="14">14 ايام (18) ريال</option>
                                        <option value="21">21 ايام (25) ريال</option>
                                    </select>
                                </h3>
                                <p>
                                    استخدم هذه الخاصية لعرض المنتج الخاص بك في الصفحه الرئيسية لقلف روتس وتمتع بملاين
                                    المشاهدات لاعلانك
                                </p>
                            </div>
                            <div class="pay-select">
                                <input type="checkbox" name="isinMainDecision">
                                <div class="pay-btn">اضافة</div>
                            </div>
                        </div>

                        <div class="pay-box not-payed extra3">
                            <img src="{{ asset('front-assets/images/extra3.jpg')}}" alt="">
                            <div class="pay-text">
                                <h3>ضمن افضل الاعلانات
                                    <select name="isinTop">
                                        <option value="7">7 ايام (10) ريال</option>
                                        <option value="14">14 ايام (18) ريال</option>
                                        <option value="21">21 ايام (25) ريال</option>
                                    </select>
                                </h3>
                                <p>
                                    اضف المنتج الخاص بك ضمن افضل اعلانات القسم ليظهر بشكل مميز فوق نتائج البحث داخل
                                    القسم
                                </p>
                            </div>
                            <div class="pay-select">
                                <input type="checkbox" name="isinTopDecision">
                                <div class="pay-btn">اضافة</div>
                            </div>
                        </div>
                        @else
                        @endif
                        <div class="top-50 nc bolded">كوبون الخصم</div>

                        <div class="pay-box not-payed">
                            <div class="nc">
                                اذا كان لديك كوبون للخصم يمكنك استخدامة لتخفيض قيمة مدفوعاتك
                            </div>
                            <div>
                                <div class="copon nc bolded">ادخل كوبون الخصم</div>
                                <div class="copon"><input type="text"></div>
                                <div class="copon">
                                    <button class="upload-btn butn blue">تطبيق</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    @if(Auth::user()->isCommercial() == false)
                    <div class="col l6">
                        <div class="note">
                            <img src="{{ asset('front-assets/images/info.jpg')}}" alt="">
                            ميز اعلانك باستخدام المجموعه التي تناسبك من الخصائص المميزة لعرض الاعلان كما يمكن التحكم في
                            فترة
                            عرضها
                        </div>
                    </div>
                    @else
                    @endif
                    <div class="clearfix"></div>
                </div>
            </div>

            <label class="checkbox full-width top-50">
                <input type="checkbox" required><span></span>
                أوافق علي <a href="{{ route ('conditions')}}" target="_blank">الشروط والاحكام</a> الخاصة بالنشر علي موقع قلف روتس
            </label>

            <div class="top-50 bottom-50 rightness">
                <input class="normal-submit" type="submit" value="تأكيد البيانات">
            </div>


        </form>


    </div>


    <div class="global-overlay"></div>


    <div class="my-modal pack1">
        <div class="closer"></div>
        <div class="my-modal-body">
            <h1 class="no-margin nb centerd">الباقة المجانية</h1>
            <img src="{{ asset('front-assets/images/pack-img.jpg')}}" alt="">
            <div class="centerd">
                <br>
                <button class="in-modal the-btn blue pack1-on">اشترك الان</button>
                <button class="in-modal the-btn gray close-me">شكرا لا اريد</button>
            </div>
        </div>
    </div>

    <div class="my-modal pack2">
        <div class="closer"></div>
        <div class="my-modal-body">
            <h1 class="no-margin nb centerd">الباقة الاضافية</h1>
            <img src="{{ asset('front-assets/images/pack-img.jpg')}}" alt="">
            <div class="centerd">
                <br>
                <button class="in-modal the-btn blue pack2-on">اشترك الان</button>
                <button class="in-modal the-btn gray close-me">شكرا لا اريد</button>
            </div>
        </div>
    </div>

    <div class="my-modal pack3">
        <div class="closer"></div>
        <div class="my-modal-body">
            <h1 class="no-margin nb centerd">الباقة المميزة</h1>
            <img src="{{ asset('front-assets/images/pack-img.jpg')}}" alt="">
            <div class="centerd">
                <br>
                <button class="in-modal the-btn blue pack3-on">اشترك الان</button>
                <button class="in-modal the-btn gray close-me">شكرا لا اريد</button>
            </div>
        </div>
    </div>

    <div class="my-modal pack4">
        <div class="closer"></div>
        <div class="my-modal-body">
            <h1 class="no-margin nb centerd">الباقة الكاملة</h1>
            <img src="{{ asset('front-assets/images/pack-img.jpg')}}" alt="">
            <div class="centerd">
                <br>
                <button class="in-modal the-btn blue pack4-on">اشترك الان</button>
                <button class="in-modal the-btn gray close-me">شكرا لا اريد</button>
            </div>
        </div>
    </div>
@endsection
