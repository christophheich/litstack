<?php

namespace AwStudio\Fjord\User;

use AwStudio\Fjord\Support\Facades\FjordRoute;
use App\Providers\RouteServiceProvider as LaravelRouteServiceProvider;
use AwStudio\Fjord\User\Controllers\FjordUserController;

class RouteServiceProvider extends LaravelRouteServiceProvider
{
    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->mapUserRoleRoutes();
    }
    
    protected function mapUserRoleRoutes()
    {
        $route = FjordRoute::get('/users', FjordUserController::class . '@index')->name('aw-studio.fjord.users');
        fjord()->extendable($route);
        FjordRoute::put('/user_roles', FjordUserController::class . '@update')->name('user_roles.update');
    }
}
