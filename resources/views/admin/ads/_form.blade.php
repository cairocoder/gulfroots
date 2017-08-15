			<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
			    {!! Form::label('name', 'Ad Name') !!}
			    {!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('name') }}</small>
			</div>
			<div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
			    {!! Form::label('description', 'Ad Description') !!}
			    {!! Form::text('description', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('description') }}</small>
			</div>
			<div class="form-group{{ $errors->has('slug') ? ' has-error' : '' }}">
			    {!! Form::label('slug', 'slug') !!}
			    {!! Form::text('slug', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('slug') }}</small>
			</div>					
			<div class="form-group{{ $errors->has('type') ? ' has-error' : '' }}">
			    {!! Form::label('type', 'Ad type') !!}
			    {!! Form::text('type', null, ['class' => 'form-control', 'required' => 'required|numeric']) !!}
			    <small class="text-danger">{{ $errors->first('type') }}</small>
			</div>
			<div class="form-group{{ $errors->has('user_id') ? ' has-error' : '' }}">
			    {!! Form::label('user_id', 'User Id') !!}
			    {!! Form::text('user_id', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('user_id') }}</small>
			</div>
			<div class="form-group{{ $errors->has('category_id') ? ' has-error' : '' }}">
			    {!! Form::label('category_id', 'category_id') !!}
			    {!! Form::text('category_id', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('category_id') }}</small>
			</div>					
			<div class="form-group{{ $errors->has('package_id') ? ' has-error' : '' }}">
			    {!! Form::label('package_id', 'Package_id') !!}
			    {!! Form::text('package_id', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('package_id') }}</small>
			</div>
{!!Form::submit('save', ['class'=>'btn btn-success'])!!}



@section('inlineJS')
<script type="text/javascript">
	

</script>
@endsection