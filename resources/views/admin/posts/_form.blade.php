			<div class="form-group{{ $errors->has('name_en') ? ' has-error' : '' }}">
			    {!! Form::label('name_en', 'Post Name') !!}
			    {!! Form::text('name_en', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('name_en') }}</small>
			</div>
			<div class="form-group{{ $errors->has('short_des_en') ? ' has-error' : '' }}">
			    {!! Form::label('short_des_en', 'Post short Description') !!}
			    {!! Form::text('short_des_en', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('short_des_en') }}</small>
			</div>
			<div class="form-group{{ $errors->has('long_des_en') ? ' has-error' : '' }}">
			    {!! Form::label('long_des_en', 'Post long Description') !!}
			    {!! Form::text('long_des_en', null, ['class' => 'form-control', 'required' => 'required|alpha_num']) !!}
			    <small class="text-danger">{{ $errors->first('long_des_en') }}</small>
			</div>
			<div class="form-group{{ $errors->has('price') ? ' has-error' : '' }}">
			    {!! Form::label('price', 'Price') !!}
			    {!! Form::text('price', null, ['class' => 'form-control', 'required' => 'required|numrical']) !!}
			    <small class="text-danger">{{ $errors->first('price') }}</small>
			</div>
			
			<div class="form-group{{ $errors->has('user_id') ? ' has-error' : '' }}">
			    {!! Form::label('user_id', 'User_id') !!}
			    {!! Form::select('user_id',$user, null, ['id'=> 'user_subscriptions', 'class' => 'form-control']) !!}
			    <small class="text-danger">{{ $errors->first('user_id') }}</small>
			</div>					
			<div class="form-group{{ $errors->has('category_id') ? ' has-error' : '' }}">
			    {!! Form::label('category_id', 'category_id') !!}
			    {!! Form::select('category_id',$category, null, ['id'=> 'categories', 'class' => 'form-control']) !!}
			    <small class="text-danger">{{ $errors->first('category_id') }}</small>
			</div>					
			<div class="form-group{{ $errors->has('sub_category_id') ? ' has-error' : '' }}">
			    {!! Form::label('sub_category_id', 'sub_category_id') !!}
			    {!! Form::select('sub_category_id',$subcategory, null, ['id'=> 'categories', 'class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('sub_category_id') }}</small>
			</div>
			<div class="form-group{{ $errors->has('photos') ? ' has-error' : '' }}">
			    {!! Form::label('photos', 'Photos') !!}
			    {!! Form::file('photos', null, ['class' => 'form-control']) !!}
			    <small class="text-danger">{{ $errors->first('photos') }}</small>
			</div>						


{!!Form::submit('save', ['class'=>'btn btn-success'])!!}



@section('inlineJS')
<script type="text/javascript">
	

</script>
@endsection