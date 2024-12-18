<?php

namespace App\Http\Controllers\Api\v1\User\Auth;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\User\Auth\LoginRequest;
use App\Http\Requests\Api\User\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends BaseController
{
    public function register(RegisterRequest $request) {

        $user = User::query()->create($request->all());

        return $this->sendResponse($user, 'User Registered Successfully.');
    }

    public function login(LoginRequest $request) {
        $validator = $request->only('credentials', 'password');

        $user = User::query()
            ->where('email', $validator['credentials'])
            ->orWhere('username', $validator['credentials'])
            ->first();

        if (! $user || ! auth('user')->attempt(['email' => $user->email, 'password' => $request['password']])) {
            return $this->sendError('Unauthorized.', ['error' => 'Unauthorized']);
        }

        $token = auth('user')->tokenById($user->id);
        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'User login successfully.');
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
