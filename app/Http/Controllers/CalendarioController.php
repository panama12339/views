<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class CalendarioController extends Controller
{
  public function index()
  {
    //recuperar sesiones del usuario y mandarlas con el rener
    //$users = User::all()->except(Auth::id());
    return Inertia::render('Calendario' /*, [
      'users' => $users,
    ]*/);
    //  Log::info('LOG EXAMPLE');
  }

  //guardo como plantilla pero no pertenece a este controlador
  /*public function update(Request $request, $id)
  {
    $user = User::find($id);
    $user->fill($request->input())->saveOrFail();
    return redirect('calendario');
  }*/
}
