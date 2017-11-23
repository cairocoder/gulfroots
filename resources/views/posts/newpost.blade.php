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

                <div class="col l3">
                    <div class="pack-box pack-white">
                        <h4>المجانية
                            <small>
                                الباقة المبسطة<br>
                                باقة مجانية بالكامل
                            </small>
                        </h4>
                        <span>تعديلات غير محدودة</span>
                        <span>يمكن اضافة حتي 10 صور</span>

                        <div class="choose-pack">
                            <input type="radio" name="pack" value="1" class="o-extra0">
                            <div>
                                اختيار
                            </div>
                            <a href="#!" class="modal-open" data-modal-open=".pack1">
                                توضيح
                            </a>

                        </div>
                    </div>
                </div>

                <div class="col l3">
                    <div class="pack-box pack-yellow">
                        <h4>الاضافية
                            <small>
                                الباقة المتوسطة<br>
                                ظهور 3 مرات اكثر من الاعلانات الاخري
                            </small>
                        </h4>
                        <span>تعديلات غير محدودة</span>
                        <span>يمكن اضافة حتي 10 صور</span>
                        <span>خلفية ملونة للاعلان</span>

                        <div class="choose-pack">
                            <input type="radio" name="pack" value="2" class="o-extra1">
                            <div>
                                اختيار
                            </div>
                            <a href="#!" class="modal-open" data-modal-open=".pack2">
                                توضيح
                            </a>

                        </div>
                    </div>
                </div>

                <div class="col l3">
                    <div class="pack-box pack-red">
                        <h4>المميزة
                            <small>
                                الباقة الذهبية<br>
                                ظهور 7 مرات اكثر من الاعلانات الاخري
                            </small>
                        </h4>
                        <span>تعديلات غير محدودة</span>
                        <span>يمكن اضافة حتي 20 صور</span>
                        <span>خلفية ملونة للاعلان</span>
                        <span>ظهور ضمن افضل الاعلانات</span>

                        <div class="choose-pack">
                            <input type="radio" name="pack" value="3" class="o-extra2">
                            <div>
                                اختيار
                            </div>
                            <a href="#!" class="modal-open" data-modal-open=".pack3">
                                توضيح
                            </a>

                        </div>
                    </div>
                </div>

                <div class="col l3">
                    <div class="pack-box pack-blue">
                        <h4>الكاملة
                            <small>
                                افضل اعلان للنجاح<br>
                                ظهور 12 مرات اكثر من الاعلانات الاخري
                            </small>
                        </h4>
                        <span>تعديلات غير محدودة</span>
                        <span>يمكن اضافة حتي 20 صور</span>
                        <span>خلفية ملونة للاعلان</span>
                        <span>ظهور ضمن افضل الاعلانات</span>
                        <span>ظهور خاص في الرئيسية</span>
                        <span>التحدث المباشر مع المشتري</span>

                        <div class="choose-pack">
                            <input type="radio" name="pack" value="4" class="o-extra3">
                            <div>
                                اختيار
                            </div>
                            <a href="#!" class="modal-open" data-modal-open=".pack4">
                                توضيح
                            </a>

                        </div>
                    </div>
                </div>


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
                            <input type="text" class="in-mini" name="price" placeholder="السعر">
                            @foreach($filters as $key => $filter)
                            <div>
                                {{ $key }} :
                                @foreach($filter as $value)
                                 &nbsp;<label class="checkbox blued">
                                        <input type="{{$value->type}}" name="{{$key}}[]" value="{{$value->id}}"><span></span> {{$value->name}}
                                    </label>
                                @endforeach
                            </div>
                            @endforeach
                            {{--<div class="price-hidden">--}}
                                {{--هل تريد وضع حد ادني للتفاوض؟ &nbsp;--}}
                                {{--<input type="text" class="in-mini" placeholder="ريال سعودي">--}}
                            {{--</div>--}}
                        </div>
                        <div>
                            الحالة : &nbsp;<label class="checkbox blued">
                                <input type="radio" name="status" value="1"><span></span> جديد
                            </label>
                            <label class="checkbox blued">
                                <input type="radio" name="status" value="2"><span></span> مستعمل
                            </label>
                        </div>

                    </div>
                    <div class="col l6">

                    </div>
                    <div class="clearfix"></div>
                </div>

                <div class="row no-margin">
                    <div class="col l6">
                        <br>
                        <input type="text" name="short_des" placeholder="عنوان">
                        <textarea name="long_des" placeholder="وصف الاعلان"></textarea>
                        <div class="pay-box not-payed">
                            <img src="{{ asset('images/urgant.jpg')}}" alt="">
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
                            <img src="{{ asset('images/info.jpg')}}" alt="">
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
                        <div class="input-wrap">
                            <input type="text" name="detailed_address" placeholder="العنوان*">
                            <a href="#!"><i class="fa fa-map-marker"></i>تحديد الموقع الجغرافي</a>
                        </div>
                    </div>
                    <div class="col l6">
                        <div class="note">
                            <img src="{{ asset('images/info.jpg')}}" alt="">
                            تأكد من ادخال جميع البيانات بشكل صحيح واضافة بيانات الاتصال بشكل واضح ومفصل ذلك سوف يساعد
                            ويسهل
                            التواصل بين عملائك
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>

            <div class="strip-head blue to-back">الصور</div>
            <div class="to-back-body">
                <div class="row no-margin">
                    <div class="col l6">

                        <div class="upload-repeater">

                            <div class="upload-image active">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>
                            <div class="upload-image">
                                <input type="file" name="img[]" class="single-upload">
                                <i class="fa fa-times"></i>
                                <span></span>
                            </div>


                            <div class="hidden-wrap">

                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>
                                <div class="upload-image">
                                    <input type="file" name="img[]" class="single-upload">
                                    <i class="fa fa-times"></i>
                                    <span></span>
                                </div>

                            </div>

                        </div>

                        <div>
                            <button class="butn blue upload-btn">اضافة</button>
                        </div>

                    </div>
                    <div class="col l6">
                        <div class="note">
                            <img src="assets/images/info.jpg" alt="">
                            تأكد من اضافة عدد كافي من الصور لتوضيح تفاصيل المنتج او الخدمة ذلك يساعد المستخدم علي الاختيار مما يساعد علي زيادة مبيعاتك                                </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>


            <div class="strip-head blue to-back">انهاء الاعلان</div>
            <div class="to-back-body">
                <div class="row no-margin">
                    <div class="col l6">


                        <div class="pay-box not-payed extra1">
                            <img src="{{ asset('images/extra1.jpg')}}" alt="">
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
                            <img src="{{ asset('images/extra2.jpg')}}" alt="">
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
                            <img src="{{ asset('images/extra3.jpg')}}" alt="">
                            <div class="pay-text">
                                <h3>ضمن افضل الاعلانات
                                    <select name="isinBest">
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
                                <input type="checkbox" name="isinBestDeci">
                                <div class="pay-btn">اضافة</div>
                            </div>
                        </div>

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
                    <div class="col l6">
                        <div class="note">
                            <img src="{{ asset('images/info.jpg')}}" alt="">
                            ميز اعلانك باستخدام المجموعه التي تناسبك من الخصائص المميزة لعرض الاعلان كما يمكن التحكم في
                            فترة
                            عرضها
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>

            <label class="checkbox full-width top-50">
                <input type="checkbox"><span></span>
                أوافق علي <a href="#!">الشروط والاحكام</a> الخاصة بالنشر علي موقع قلف روتس
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
            <img src="{{ asset('images/pack-img.jpg')}}')}}" alt="">
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
            <img src="{{ asset('images/pack-img.jpg')}}')}}" alt="">
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
            <img src="{{ asset('images/pack-img.jpg')}}')}}" alt="">
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
            <img src="{{ asset('images/pack-img.jpg')}}" alt="">
            <div class="centerd">
                <br>
                <button class="in-modal the-btn blue pack4-on">اشترك الان</button>
                <button class="in-modal the-btn gray close-me">شكرا لا اريد</button>
            </div>
        </div>
    </div>
@endsection

<!-- jQuery plugins -->
<script defer src="{{ asset('js/ui.min.js')}}"></script>
