@extends('layouts.admin.main')
@section('title','Users')

@section('content')

<div class="panel panel-default">
	<div class="panel-heading">@yield('title')</div>
	<div class="panel-body">
		<table class="table table-bordered">
			<thead>
				<th width="1%">#</th>
				<th>Name</th>
				<th>Type</th>
				<th>Options</th>
				<th>actions</th>
			</thead>
			@foreach($users as $user)
			<tbody>
					<tr>
						<td>{{$user->id}}</td>
						<td>{{$user->name}}</td>
						<td>{{($user->isCommercial())?"Commercial":"Personal"}}</td>
						<td width="16%">
							{!! Form::open(['method' => 'DELETE', 'action' => ['UsersController@destroy',$user->id]]) !!}
									<a href="{{Url('/')}}/admin/users/{{$user->id}}/edit" class="btn btn-warning">Edit</a>
							        {!! Form::submit("Delete", ['class' => 'btn btn-danger']) !!}
							{!! Form::close() !!}
						</td>
						<td>
							<div class="col-md-3">
								<a href="{{Url('/')}}/admin/users/{{$user->id}}/messages" class="btn btn-primary">Messages</a>
							</div>
							<div class="col-md-3">
								<a href="{{Url('/')}}/admin/users/{{$user->id}}/bills" class="btn btn-primary">Bills</a>
							</div>
							@if($user->isCommercial())
							<div class="col-md-3">
								<a href="{{Url('/')}}/admin/users/{{$user->id}}/subscriptions" class="btn btn-primary">Subscriptions</a>
							</div>
							@endif

							<div class="col-md-3">
								<a href="{{Url('/')}}/admin/users/{{$user->id}}/posts" class="btn btn-primary">Posts</a>
							</div>
						</td>
					</tr>
			</tbody>
			@endforeach
		</table>
	</div>
</div>
@endsection
@section('inlineJS')
<script type="text/javascript">
	$('table').dataTable();
</script>
@endsection