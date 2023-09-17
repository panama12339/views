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

        .header-images {
            position: absolute;
            top: 0;
            left: 0;
            width: 25%;
            height: 20%;
            z-index: -1;
        }


        .images {
            position: absolute;
            top: 0;
            right: 0;
            width: 25%;
            height: 20%;
            z-index: -1;
            background-color: #c084adc9;
            display: inline-block;
            padding: 10px;
            border-radius: 0 0 0 50px;
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

        /* Puedes ajustar esto según sea necesario para el espaciado desde la parte superior */
    </style>

</head>

<body class="font-sans antialiased">
    <img src="{{ asset('images/logoGabineteSanacionConducta.png') }}" alt="" class="header-images"
        style="object-fit:"">
    <img src="{{ asset('images/logoFundacionEducar.png') }}" alt="" class="images" style="object-fit:"" ">
    <div class="menu">
        <ul>
            <li><a href="#" onclick="marcarOpcion(event)">Sesiones</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Cambiar contraseña</a></li>
            <li><a href="#" onclick="marcarOpcion(event);cambiarVista(event)">Cambiar datos</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Opción 4</a></li>
        </ul>
    </div>
    <div class="Contianer">
        <h1>Sesiones</h1>
        <div class="paciente">
            <div class="datos">
                Nombre del paciente: Juan <br>
                Fecha de nacimiento: 16/09/2000 (23 años)<br>
                Carnet de identidad: 12345678
            </div>
        </div>
        <div class="tarjeta">
            <h2>Sabado 16 de Septiembre de 2023</h2>
            <div class="datos-sesion">
                Datos relevantes de la sesion

            </div>

        </div> <div class="tarjeta">
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
    function marcarOpcion(event) {
        var opciones = document.querySelectorAll('.menu a');
        for (var i = 0; i < opciones.length; i++) {
            opciones[i].classList.remove('active');
        }
        event.target.classList.add('active');
    }

    function cambiarVista(event) {
        event.preventDefault(); // Evita que el enlace haga la navegación normal

        // Aquí puedes redirigir a la otra vista
        window.location.href = 'cambio';
    }
</script>

</html>
