<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\CommercialUsers;
use Auth;
use DB;
use Hash;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\MessageBag;
use Twilio\Rest\Client;
//use Rinvex\Authy\App as AuthyApp;
//use Rinvex\Authy\User as AuthyUser;
//use Rinvex\Authy\Token as AuthyToken;

class RegisterCommercialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createNewCommercialUser(Request $request)
    {
        $this->validate(
            $request, [
                'name' => 'required|string',
                'email' => 'required|unique:users|email',
                'password' => 'required',
                'country_code' => 'required',
                'phone_number' => 'required|numeric'
            ]
        );
        $values = $request->all();
        $values['password'] = Hash::make($values['password']);
        User::create([
            'name' => $values['name'],
            'email' => $values['email'],
            'password' => $values['password'],
        ]);
        DB::beginTransaction();
        $values['user_id'] = User::where('email', $values['email'])->first()->id;
        $newUser = new CommercialUsers($values);
        $newUser->save();
        Auth::login(User::where('email', $values['email'])->first());
        $authyUser = app('rinvex.authy.user');
        $user = $authyUser->register($values['email'], $values['phone_number'], $values['country_code']);
//        dd($user);
        if ($user->succeed()) {
            $newUser->authy_id = $user->get('user')['id'];
            $newUser->save();
            $request->session()->flash(
                'status',
                "User created successfully"
            );
            $authyToken = app('rinvex.authy.token');
            $smsTokenSent = $authyToken->send($user->get('user')['id'], 'sms'); // Send SMS token
            DB::commit();
            return redirect()->route('user-show-verify');
        } else {
            //delete created user
            User::where('email', $values['email'])->first();
            $errors = $this->getAuthyErrors($authyUser->errors());
            DB::rollback();
            return view('auth.commercialuserregister', ['errors' => new MessageBag($errors)]);
        }
    }

    /**
     * This controller function handles the submission form
     *
     * @param Request $request Current User Request
     * @param Authenticatable $user Current User
     * @param AuthyApi $authyApi Authy Client
     * @return mixed Response view
     */
    public function verify(Request $request, Authenticatable $user)
    {
        $user = $user->getCommerical;
        $token = $request->input('token');
        $authyToken = app('rinvex.authy.token');
        $tokenVerified = $authyToken->verify($token, $user->authy_id); // Verify token
        if ($tokenVerified->succeed()) {
            $user->verified = true;
            $user->save();
            return redirect()->route('messageconfirmation');
        } else {
            $errors = $this->getAuthyErrors($tokenVerified->errors());
            return view('auth.verifyUser', ['errors' => new MessageBag($errors)]);
        }
    }

    /**
     * This controller function handles the verification code resent
     *
     * @param Request $request Current User Request
     * @param Authenticatable $user Current User
     * @param AuthyApi $authyApi Authy Client
     * @return mixed Response view
     */
    public function verifyResend(Request $request, Authenticatable $user)
    {
        $user = $user->getCommerical;
        $authyToken = app('rinvex.authy.token');
        $smsTokenSent = $authyToken->send($user->authy_id, 'sms'); // Send SMS token
        if ($smsTokenSent->succeed()) {
            $request->session()->flash(
                'status',
                'Verification code re-sent'
            );
            return redirect()->route('user-verify');
        } else {
            $errors = $this->getAuthyErrors($smsTokenSent->errors());
            return view('auth.verifyUser', ['errors' => new MessageBag($errors)]);
        }
    }

    private function getAuthyErrors($authyErrors)
    {
        $errors = [];
        foreach ($authyErrors as $field => $message) {
            array_push($errors, $field . ': ' . $message);
        }
        return $errors;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function showRegistrationForm()
    {
        return view('auth.commercialuserregister');
    }
}