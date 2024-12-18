<?php

use App\Http\Controllers\Api\Admin\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::controller(AuthController::class)
            ->prefix('auth')
            ->name('auth')
            ->group(function () {
                Route::post('register', 'register');
                Route::post('login', 'login');
            });

        Route::middleware(['auth:admin'])
            ->group(function () {
                Route::delete('/logout', [AuthController::class, 'logout']);
            });
    });
