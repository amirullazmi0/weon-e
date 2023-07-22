<?php

namespace App\Http\Controllers;

use App\Models\Calibrate;
use App\Models\User;
use App\Models\Sensor;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class API_Controller extends Controller
{
    //
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'ada kesalahan',
                'data' => $validate->errors()
            ]);
        }

        $input = $request->all();
        $input['password'] = bcrypt($request->password);
        $user = User::create($input);

        $success['token'] = $user->createToken('auth_token')->plainTextToken;
        $success['name'] = $user->name;
        return response()->json([
            'success' => false,
            'message' => 'success',
            'data' => $success
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            // $auth = Auth::user();
            $success['token'] = Auth()->user()->createToken('auth_token')->plainTextToken;
            $success['name'] = Auth()->user()->name;
            $success['email'] = Auth()->user()->email;
            return response()->json([
                "success" => true,
                "message" => "login success",
                "data" => $success
            ]);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Check Email and Password",
                "data" => null
            ]);
        }
    }

    public function allData()
    {
        $data = [
            'sensor' => Sensor::all(),
            'calibrate' => Calibrate::all(),
            'user' => Auth()->user(),
        ];

        return response()->json([
            'success' => true,
            'authUser' => Auth()->user(),
            'message' => 'auth sanctum success',
            'data' => $data
        ]);
    }

    public function updateUser(Request $request)
    {
        $rules = ([
            'name' => 'required',
        ]);

        if ($request->email != auth()->user()->email) {
            # code...
            $rules['email'] = 'required|email:dns|unique:users';
        };
        $validateData = $request->validate($rules);

        User::where('id', auth()->user()->id)
            ->update($validateData);

        return response()->json([
            'success' => true,
            'message' => 'Update profil success',
        ]);
    }

    public function updatePasswordUser(Request $request)
    {
        if ($request->password != $request->password2) {
            return response()->json([
                'success' => false,
                'errors' => [
                    'password2' => 'konfirmasi password salah'
                ],
            ]);
        }

        $validateData = $request->validate([
            'password' => 'required'
        ]);

        $hash = Hash::make($validateData['password']);
        User::whereId(auth()->user()->id)->update([
            'password' => $hash
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Update password success',
        ]);
    }

    public function updateCalibrate(Request $request)
    {
        $data = [
            'a' => $request->a,
            'b' =>  $request->b,
        ];
        // code
    }
}
