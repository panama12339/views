<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HistorialSesionesController extends Controller
{
    public function index()
    {

        return view('sesion');
    }
}
