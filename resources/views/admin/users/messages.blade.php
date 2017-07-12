@extends('layouts.admin.main')
@section('title',$user->name.' Messages')
@section('content')
	
	@foreach($user->mesgs as $message)
	{{$message[0]}}
	@endforeach
@endsection