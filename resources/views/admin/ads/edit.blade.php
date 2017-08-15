@extends('layouts.admin.main')
@section('title','Edit Ads')
@section('content')
	<div class="panel panel-default">
		<div class="panel-heading">@yield('title')</div>
		<div class="panel-body">
			{!!Form::model($ad,['action'=>['AdController@update',$ad->id],'method'=>'PATCH','novalidate'])!!}
			@include('admin.ads._form')
		{!!Form::close()!!}
		</div>
	</div>
@endsection