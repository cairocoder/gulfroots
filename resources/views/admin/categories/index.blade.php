@extends('layouts.admin.main')
	@section('title', 'categories')
	@section('content')
	<div class="panel panel-default">
		<div class="panel-heading">@yield('title')</div>
		<div class="panel-body">
			@if(count($categories) > 0)
				<table class="table table-bordered">
					<thead>
						<th> #</th>
						<th> name ar</th>
						<th> name en</th>
						<th> option</th>
					</thead>
					<tbody>
						@foreach($categories as $category)
							<tr>
								<td>{{$category->id}}</td>
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}">{{$category->name_ar}}</a></td>
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}">{{$category->name_en}}</a></td>
								<td><a href="{{Url('/')}}/admin/categories/{{$category->id}}/edit" class="btn btn-warning">edit</a></td>
							</tr>
						@endforeach
					</tbody>
				</table>
			@else
				<div class="well text-center">no categories yet !</div>
			@endif
		</div>
	</div>
	@endsection
@section('inlineJS')
<script type="text/javascript">
	$('table').dataTable();
</script>
@endsection