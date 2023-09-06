<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
  //
  public function index()
  {
    $user = Auth::user();
    if ($user->hasRole('psicologo')) {
      return Inertia::render('Dashboard');
    } else {
      return Inertia::render('Admin');
    }
    //  Log::info('Hi This is from ItSolutionStuff.com!');
  }
}
