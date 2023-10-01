<?php

namespace app\Http\Controllers;

use App\Models\Sesion;

class SesionController extends Controller
{
    public function index()
    {
        $sesiones = Sesion::all();
        return response()->json($sesiones);
    }
}
