@extends('layouts.admin.main')

	@section('title','Edit Category')
	@section('content')
		<div class="panel panel-default">
			<div class="panel-heading">@yield('title')</div>
			<div class="panel-body">
				{!! Form::model($category,['action' => ['CategoriesController@update', $category->id], 'method' => 'PATCH']) !!}
					@include('admin.categories._form')
					<div class="btn-group pull-right">
						{!! Form::submit("Save", ['class' => 'btn btn-success']) !!}
					</div>
				
				{!! Form::close() !!}
			</div>
		</div>
	@endsection