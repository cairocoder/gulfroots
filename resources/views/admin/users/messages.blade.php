@extends('layouts.admin.main')
	@section('title',' Messages')
	@section('content')
	
	<div class="panel panel-default">
		<div class="panel-heading">{{$user->name}} Messages</div>
		<div class="panel-body">
			<table class="table table-bordered">
				<thead>
					<th>#</th>
					<th>Name</th>
					<th>Title</th>
					<th>Date</th>
					<th>Control</th>
				</thead>
				@foreach($user->getMessages as $mes)
				<tr>
					<td>{{$mes->id}}</td>
					<td>{{$mes->user->name}}</td>
					<td>{{$mes->message}}</td>
					<td>{{$mes->created_at->format('Y-m-d H:i:s')}}</td>
					<td width="16%">
							{!! Form::open(['method' => 'DELETE', 'action' => ['UsersController@destroy',$user->id]]) !!}
									<a href="{{Url('/')}}/admin/users/messages/{{$user->id}}/edit" class="btn btn-warning">Edit</a>
							        {!! Form::submit("Delete", ['class' => 'btn btn-danger']) !!}
							{!! Form::close() !!}
						</td>
				</tr>
				@endforeach
			</table>
		</div>
	</div>
@endsection