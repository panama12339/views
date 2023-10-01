<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
  //
  public function index()
  {
    $user = Auth::user();
    if ($user->hasRole('psicologo')) {
      return redirect('calendario');
    } else {
      if ($user->hasRole('paciente')) {
        return Inertia::render('HomePaciente');
      } else {
        if ($user->hasRole('tutor')) {
          return Inertia::render('HomeTutor');
        } else {
          if ($user->hasRole('administrador')) {
            return Inertia::render('HomeAdministrador');
          } else {
            return Inertia::render('Dashboard');
          }
        }
      }
    }
    //  Log::info('Hi This is from ItSolutionStuff.com!');
  }
}
