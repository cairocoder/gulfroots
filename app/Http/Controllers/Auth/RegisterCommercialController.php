<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\CommercialUsers;
use Auth;
use Authy\AuthyApi as AuthyApi;
use DB;
use Hash;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\MessageBag;
use Twilio\Rest\Client;

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
    public function createNewCommercialUser(Request $request, AuthyApi $authyApi)
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
        $authyUser = $authyApi->registerUser(
//            $newUser->email,
            $values['email'],
            $newUser->phone_number,
            $newUser->country_code
        );
        if ($authyUser->ok()) {
            $newUser->authy_id = $authyUser->id();
            $newUser->save();
            $request->session()->flash(
                'status',
                "User created successfully"
            );

            $sms = $authyApi->requestSms($newUser->authy_id);
            DB::commit();
            return redirect()->route('user-show-verify');
        } else {
            $errors = $this->getAuthyErrors($authyUser->errors());
            DB::rollback();dd($errors);
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
    public function verify(Request $request, Authenticatable $user,
                           AuthyApi $authyApi, Client $client)
    {
        $user = $user->getCommerical;
        $token = $request->input('token');
        $verification = $authyApi->verifyToken($user->authy_id, $token);
        if ($verification->ok()) {
            $user->verified = true;
            $user->save();
            //$this->sendSmsNotification($client, $user);
            return redirect()->route('messageconfirmation');
        } else {
            $errors = $this->getAuthyErrors($verification->errors());
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
    public function verifyResend(Request $request, Authenticatable $user,
                                 AuthyApi $authyApi)
    {
        $user = $user->getCommerical;
        $sms = $authyApi->requestSms($user->authy_id);
        if ($sms->ok()) {
            $request->session()->flash(
                'status',
                'Verification code re-sent'
            );
            return redirect()->route('user-show-verify');
        } else {
            $errors = $this->getAuthyErrors($sms->errors());
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

    private function sendSmsNotification($client, $user)
    {
        $twilioNumber = config('services.twilio')['number'] or die(
        "TWILIO_NUMBER is not set in the environment"
        );
        $messageBody = 'You did it! Signup complete :)';

        $client->messages->create(
            $user->fullNumber(),    // Phone number which receives the message
            [
                "from" => $twilioNumber, // From a Twilio number in your account
                "body" => $messageBody
            ]
        );
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