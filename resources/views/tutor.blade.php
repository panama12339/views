<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />



    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    <style>
        body {
            background-color: #f9f9f9;
            /* Cambia este color a tu preferencia */
        }


        .menu {
            float: left;
            width: 200px;
            height: 500px;
            margin-top: 10px;
            background-color: #ffffff;
            border: 2px solid black
        }

        .menu ul {
            list-style-type: none;
            padding: 0;
        }

        .menu li {
            padding: 8px 16px;
        }

        .menu a {
            text-decoration: none;
            color: #333;
            display: block;
            transition: color 0.3s ease, background-color 0.3s ease;
            /* Hace que los enlaces ocupen todo el ancho del li */
        }

        .menu a:hover {
            color: #fff;
            /* Cambia a tu color de texto hover */
            background-color: #e261d5;
            /* Cambia a tu color de fondo hover */
        }

        .menu a.active {
            background-color: #e261d5;
            color: #fff;
            padding: 8px 16px;
            /* Añade un padding al texto de la opción marcada */
        }

        .Contianer {
            text-align: center;
            width: 1000px;
            height: 500px;
            margin: 0 auto;
            /* Esto centra el div horizontalmente */
            margin-top: 200px;
            margin-left: 300px;
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            /* Cambiado a disposición vertical */
            align-items: center;
            border: 1px solid black;
        }

        .Container>div {
            margin: 10px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f4f4f4;
            width: 80%;
            /* Ancho fijo del 80% */
            max-width: 600px;
            /* Ancho máximo */
        }

        .Contianer h1 {
            font-size: 30px;
            color: green;
            font-weight: bold;

        }

        .paciente {
            display: flex;
            border: 1px solid black;
            width: 900px;
            height: 75px;
            margin: 0 auto;
            /* Esto centra el div horizontalmente */
            margin-top: 10px;
            margin-left: 50px;
            align-items: center;
        }

        .datos {
            margin-left: 200px;
            text-align: left;
        }

        .tarjeta {
            width: 500px;
            height: 250px;
            margin: 0 auto;
            /* Esto centra el div horizontalmente */
            margin-top: 20px;
            margin-left: 140px;
            border: 1px solid black;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 15px;

        }

        .datos-sesion {
            width: 450px;
            height: 190px;
            margin: 0 auto margin-top: 18px;
            margin-left: 24px;


        }

        .tarjeta h2 {
            color: green;
            text-decoration: underline;
            text-align: left;
            font-weight: bold;
            font-size: 20px;

        }

        .submenu {
            display: none;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        /* Puedes ajustar esto según sea necesario para el espaciado desde la parte superior */
    </style>

</head>

<body class="font-sans antialiased">
    <div id="image">
    </div>

    <div class="menu">
        <ul>
            <li class="opcion" onclick="toggleLista(event); marcarOpcion(event)">
                <a href="#">Pacientes</a>
                <ul class="submenu">
                    <li><a href="#" onclick="mostrarPaciente(1);marcarOpcion(event)">Paciente 1</a></li>
                    <li><a href="#" onclick="mostrarPaciente(2);marcarOpcion(event)">Paciente 2</a></li>
                    <li><a href="#" onclick="mostrarPaciente(3);marcarOpcion(event)">Paciente 3</a></li>
                </ul>
            </li>
            <li><a href="#" onclick="marcarOpcion(event)">Cambiar contraseña</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Cambiar datos</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Opción 4</a></li>
        </ul>
    </div>
    <div class="Contianer">
        <h1>Sesiones</h1>
        <div class="paciente">
            <div class="datos">
                Nombre del paciente: <span id="nombre"></span><br>
                Fecha de nacimiento: <span id="fechaNacimiento"></span> (<span id="edad"></span> años)<br>
                Carnet de identidad: <span id="carnetIdentidad"></span>
            </div>
        </div>
        <div class="tarjeta">
            <h2>Sabado 16 de Septiembre de 2023</h2>
            <div class="datos-sesion">
                Datos relevantes de la sesion

            </div>

        </div>
        <div class="tarjeta">
            <h2>Miercoles 20 de Septiembre de 2023</h2>
            <div class="datos-sesion">
                Datos relevantes de la sesion

            </div>

        </div>
        <div class="tarjeta">
            <h2>Lunes 05 de Septiembre de 2023</h2>
            <div class="datos-sesion">
                Datos relevantes de la sesion

            </div>
        </div>
    </div>



</body>
<script src="{{ asset('js/app.js') }}" defer></script>

<script>
    function mostrarPaciente(pacienteID) {
        var pacientes = {
            1: {
                nombre: 'Juan',
                fecha_nacimiento: '16/09/2000',
                edad: 23,
                carnet_identidad: '12345678'
            },
            2: {
                nombre: 'María',
                fecha_nacimiento: '20/05/1998',
                edad: 25,
                carnet_identidad: '23456789'
            },
            3: {
                nombre: 'Carlos',
                fecha_nacimiento: '10/12/2002',
                edad: 20,
                carnet_identidad: '34567890'
            }
        };

        if (pacientes[pacienteID]) {
            var paciente = pacientes[pacienteID];
            document.getElementById('nombre').textContent = paciente.nombre;
            document.getElementById('fechaNacimiento').textContent = paciente.fecha_nacimiento;
            document.getElementById('edad').textContent = paciente.edad;
            document.getElementById('carnetIdentidad').textContent = paciente.carnet_identidad;
        }
    }

    function marcarOpcion(event) {
        var opciones = document.querySelectorAll('.menu a');
        for (var i = 0; i < opciones.length; i++) {
            opciones[i].classList.remove('active');
        }
        event.target.classList.add('active');
    }

    function toggleLista(event) {
        event.preventDefault();
        var sublista = event.target.nextElementSibling;

        if (sublista.style.display === 'none' || sublista.style.display === '') {
            sublista.style.display = 'block';
        } else {
            sublista.style.display = 'none';
        }
    }
</script>

</html>
