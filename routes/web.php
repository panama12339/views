<?php

namespace App\http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\nuevo;
use App\Http\Controllers\PacienteController;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\PsicologoController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', [NuevoController::class, 'index']);
Route::redirect('/', 'login');

//Solo un usuario autenticado puede ingresar a este grupo de rutas
Route::middleware([
  'auth:sanctum',
  config('jetstream.auth_session'),
  'verified',
])->group(function () {
  Route::get('/home', [HomeController::class, 'index'])->name('home');

  Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
  })->name('dashboard');

  Route::group(['middleware' => ['role:administrador']], function () {
    Route::get('/homeAdministrador', function () {
      return Inertia::render('HomeAdministrador');
    })->name('homeAdministrador');

    Route::resource('usuarios', ListaUsuariosController::class);
  });

  Route::group(['middleware' => ['role:psicologo']], function () {
    Route::resource('calendario', CalendarioController::class);

    Route::resource('pacientes', PacientesController::class);
  });

  Route::group(['middleware' => ['role:tutor']], function () {
    Route::resource('homeTutor', HomeTutorController::class);

    Route::resource('asignarPaciente', AsignarPacienteController::class);

    Route::resource('solicitudTutor', SolicitudTutorController::class);
  });

  Route::group(['middleware' => ['role:paciente']], function () {
    Route::resource('homePaciente', HomePacienteController::class);
  });
});
Route::get('/hola', function () {
  return Inertia::render('RegistroPsicologo');
})->name('RegistroPsicologo');


Route::get('/hola2', function () {
  return Inertia::render('CambioDatos');
})->name('CambioDatos');

Route::get('/hola3', function () {
  return Inertia::render('SesionesPaciente');
})->name('SesionesPaciente');

Route::get('/num1', function () {
  return Inertia::render('RegistroTutor');
})->name('RegistroTutor');

Route::get('/num2', function () {
  return Inertia::render('RegistroPacienteM');
})->name('RegistroPacienteM');
Route::get('/num3', function () {
  return Inertia::render('CambioPass');
})->name('CambioPass');
Route::get('/num4', function () {
  return Inertia::render('RecuperarPass');
})->name('RecuperarPass');
Route::inertia('/Otro', 'Otro');
Route::get('/num5', function () {
  return Inertia::render('DisponibilidadTiempo');
})->name('DisponibilidadTiempo');

//Route::resource('Registro', App\Http\Controllers\PsicologoController::class);
