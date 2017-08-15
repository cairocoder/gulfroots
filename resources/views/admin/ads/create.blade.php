@extends('layouts.admin.main')
@section('title','Ads Settings')
@section('content')
<div class="panel panel-default">
	<div class="panel-heading">@yield('title')</div>
	<div class="panel-body">
		{!!Form::open(['action'=>['AdController@store'],'novalidate'])!!}
			@include('admin.ads._form')	
		{!!Form::close()!!}
	</div>
</div>
@endsection