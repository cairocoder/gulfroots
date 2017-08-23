@extends('layouts.admin.main')
	@section('title', 'Ads')
	@section('content')
	<a href="{{Url('/')}}/admin/ads/create" class="btn btn-success btn-icon-only"><i class="fa fa-plus"></i></a>
	<br><br>
	<div class="panel panel-default">
		<div class="panel-heading">@yield('title')</div>
		<div class="panel-body">
		@if(count($ads)>0)
			<table class="table table-bordered">
				<thead>
					<th>#</th>
					<th>User Id</th>
					<th>Category Id</th>
					<th>Package Id</th>
					<th>Name</th>
					<th>Description</th>
					<th>Slug</th>
					<th>Type</th>
					<th>Edit</th>
					<th>Delete</th>
				</thead>
				@foreach($ads as $ad)
					<tr>
						<td>{{$ad->id}}</td>
						<td>{{$ad->user->user_id}}</td>
						<td>{{$ad->category->name_en}}</td>
						<td>{{$ad->package->name_en}}</td>
						<td>{{$ad->name}}</td>
						<td>{{$ad->description}}</td>
						<td>{{$ad->slug}}</td>
						<td>{{$ad->type}}</td>
						<td><a href="{{Url('/')}}/admin/ads/{{$ad->id}}/edit" class="btn btn-warning">EDIT</a></td>
						<td>
							{!!Form::open(['method'=>'DELETE','action'=>['AdController@destroy',$ad->id]])!!}
								<button class="btn btn-danger" onClick="return confirm('Are you sure to DELETE This record ?')">DELETE</button>
							{!!Form::close()!!}
						</td>
					</tr>
				@endforeach
			</table>
			@else
				<div class="well">No filters yet !!</div>
			@endif
		</div>
		</div>
	</div>
@stop
@section('inlineJS')
<script type="text/javascript">
	$('table').dataTable();
</script>
@endsection