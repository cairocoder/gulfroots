<div role="tabpanel">
	<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active">
			<a href="#settings_ar" aria-controls="settings_ar" role="tab" data-toggle="tab"> <i class="fa fa-gears"></i> Package Ar</a>
		</li>
		<li role="presentation">
			<a href="#settings_en" aria-controls="settings_en" role="tab" data-toggle="tab"><i class="fa fa-gears"></i> Package En</a>
		</li>
		<li role="presentation">
			<a href="#settings_price_isBestValue" aria-controls="settings_price_isBestValue" role="tab" data-toggle="tab"><i class="fa fa-gears"></i> Others </a>
		</li>
	</ul>
	<!-- Tab panes -->
	<div class="tab-content">	
		<div role="tabpanel" class="tab-pane fade in active" id="settings_ar">
			
			<div class="form-group{{ $errors->has('name_ar') ? ' has-error' : '' }}">
			    {!! Form::label('name_ar', 'Package Name AR') !!}
			    {!! Form::text('name_ar', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('name_ar') }}</small>
			</div>
			<div class="form-group{{ $errors->has('description_ar') ? ' has-error' : '' }}">
			    {!! Form::label('description_ar', 'Package Description AR') !!}
			    {!! Form::text('description_ar', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('description_ar') }}</small>
			</div>
			<div class="form-group{{ $errors->has('features_ar') ? ' has-error' : '' }}">
			    {!! Form::label('features_ar', 'Packages Features AR') !!}
			    {!! Form::text('features_ar', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('features_ar') }}</small>
			</div>					

		</div>

		<div role="tabpanel" class="tab-pane fade" id="settings_en">
			
			<div class="form-group{{ $errors->has('name_en') ? ' has-error' : '' }}">
			    {!! Form::label('name_en', 'Package Name EN') !!}
			    {!! Form::text('name_en', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('name_en') }}</small>
			</div>
			<div class="form-group{{ $errors->has('description_en') ? ' has-error' : '' }}">
			    {!! Form::label('description_en', 'Package Description En') !!}
			    {!! Form::text('description_en', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('description_en') }}</small>
			</div>
			<div class="form-group{{ $errors->has('features_ar') ? ' has-error' : '' }}">
			    {!! Form::label('features_ar', 'Packages Features AR') !!}
			    {!! Form::text('features_ar', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('features_ar') }}</small>
			</div>

		</div>

		<div role="tabpanel" class="tab-pane fade" id="settings_price_isBestValue">
			
			<div class="form-group{{ $errors->has('price') ? ' has-error' : '' }}">
			    {!! Form::label('price', 'Package Price') !!}
			    {!! Form::text('price', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('price') }}</small>
			</div>
			<div class="form-group{{ $errors->has('isBestValue') ? ' has-error' : '' }}">
			    {!! Form::label('isBestValue', 'Package isBestValue') !!}
			    {!! Form::text('isBestValue', null, ['class' => 'form-control', 'required' => 'required']) !!}
			    <small class="text-danger">{{ $errors->first('isBestValue') }}</small>
			</div>

		</div>
	</div> 
	{!!Form::submit('save', ['class'=>'btn btn-success'])!!}
</div>			