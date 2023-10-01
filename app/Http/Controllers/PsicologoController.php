<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psicologo;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PsicologoController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'apellidos' => 'required',
            'fecha_funcion_titulo' => 'required',
            'universidad' => 'required',
            'ciudad_residencia' => 'required',
            'pais_residencia' => 'required',
            'descripcion' => 'required'

        ]);
        $psicologo = new Psicologo($request->input());
        $psicologo->save();
        return redirect('Registro');
    }
}
