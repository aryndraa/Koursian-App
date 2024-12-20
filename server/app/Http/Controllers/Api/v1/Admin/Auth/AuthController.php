<?php

namespace App\Http\Controllers\Api\v1\Admin\Auth;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\Admin\Auth\LoginRequest;
use App\Http\Requests\Api\Admin\Auth\RegisterRequest;
use App\Models\Admin;

class AuthController extends BaseController
{
    public function register(RegisterRequest $request) {

        $request['password'] = bcrypt($request['password']);
        $admin = Admin::query()->create($request->all());

        return $this->sendResponse($admin, 'Admin Registered Successfully.');
    }

    public function login(LoginRequest $request) {
        $credentials = $request->only('email', 'password');

        if (! $token = auth('admin')->attempt($credentials)) {
            return $this->sendError('Unauthorized.', ['error' => 'Unauthorized']);
        }

        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'Admin login successfully.');
    }

    public function logout()
    {
        auth()->logout();

        return $this->sendResponse([], 'Successfully logged out.');
    }


    protected function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
        ];
    }
}
