<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class ListaUsuariosController extends Controller
{
  //
  public function index()
  {
    $users = User::all()->except(Auth::id());
    return Inertia::render('ListaUsuarios', [
      'usuarios' => $users,
    ]);
    //  Log::info('Hi This is from ItSolutionStuff.com!');
  }

  public function update(Request $request, $id)
  {
    $user = User::find($id);
    $user->fill($request->input())->saveOrFail();
    return redirect('usuarios');
  }
}
