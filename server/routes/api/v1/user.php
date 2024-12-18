<?php

use App\Http\Controllers\Api\v1\User\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('user')
    ->name('user.')
    ->group(function () {
        Route::controller(AuthController::class)
            ->prefix('auth')
            ->name('auth')
            ->group(function () {
                Route::post('register', 'register');
                Route::post('login', 'login');
            });

        Route::middleware(['auth:user'])
            ->group(function () {
                Route::delete('/logout', [AuthController::class, 'logout']);
            });
    });
