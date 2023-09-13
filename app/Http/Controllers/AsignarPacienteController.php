<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Notification;
use App\Notifications\Prueba;

class AsignarPacienteController extends Controller
{
  //hay que mandar el user loggeado?
  public function index()
  {
    //$users = User::all()->except(Auth::id());
    return Inertia::render(
      'AsignarPaciente' /*, [
      'users' => $users,
    ]*/
    );
    //  Log::info('LOG EXAMPLE');
  }

  //asignar el tutor al paciente
  public function update(Request $request, $id)
  {
    //recuperar paciente menor de edad NO OLVIDAR VALIDAR QUE ES MENOR DE EDAD
    //recuperar tutor primario del paciente menor de edad
    //$userPaciente = User::find($id);
    $userTutor = Auth::user();
    //la siguiente sentencia no sirve porque usa el ci del paciente y no su id. O MANEJAMOS EL CI? NO OLVIDAR QUE ES UNA TABLA INTERMEDIA CON EL ID DEL PACIENTE Y EL TUTOR
    /* $user->fill($request->input())->saveOrFail();*/
    Log::info('solicitando asignacion de  paciente');
    Log::info($id);

    Log::info('a tutor ');
    Log::info($userTutor);
    //Notification::send('carlosmendizabal299@gmail.com', new Prueba());
    \Notification::route('mail', 'carlosmendizabal299@gmail.com')->notify(
      new Prueba(/*$invoice*/)
    );
    //return redirect('asignarPaciente');
  }
}
