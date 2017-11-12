@extends('layouts.admin.main')
@section('title', $category->name_en)
@section('content')
	<a href="{{Url('/')}}/admin/categories/{{$category->id}}/create" class="btn btn-success btn-icon-only"><i class="fa fa-plus"></i></a>	 <br><br>
	@if(count($category->getSubCategories) > 0)
	<div class="panel panel-default">
		<div class="panel-heading">Sub Categories of @yield('title')</div>
			<div class="panel-body">
				<table class="table table-bordered">
					<thead>
						<th> #</th>
						<th> Name</th>
						<th> Sub id</th>
						<th> Edit</th>
						<th> Delete</th>
					</thead>

					<tbody>
						@foreach($category->getSubCategories as $category)
							<tr>
								<td>{{$category->id}}</td>
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}">{{$category->name}}</a></td>
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}">{{$category->sub_id}}</a></td>
								
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}/edit" class="btn btn-warning">edit</a></td>
								<td>
								{!!Form::open(['method'=>'DELETE','action'=>['CategoriesController@destroy',$category->id]])!!}
									<button class="btn btn-danger" onClick="return confirm('Are you sure to DELETE This category ?')">DELETE</button>
								</td>
								{!!Form::close() !!}
							</tr>
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
	@else
		<div class="well text-center">no sub categories yet !</div>
	@endif
@stop

