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
            border: 5px solid rgb(8, 129, 12);
            align-items: center;

        }

        .Contianer h1 {
            font-size: 30px;
            color: green;
            font-weight: bold;

        }

        #formulario {
            width: 50%;
            height: 100%;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            /*margin-left: 270px;
            /* Añade un margen a la izquierda */
            margin-top: 50px;
            /* Añade un margen hacia abajo */
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #formulario input[class="form"] {
            height: 26px;
            width: 252px;
            flex-direction: column;
            margin-bottom: 40px
        }
    </style>
</head>

<body class="font-sans antialiased">
    <div id="image"></div>

    <div class="menu">
        <ul>
            <li><a href="#" onclick="marcarOpcion(event)">Sesiones</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Cambiar contraseña</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Cambio de datos</a></li>
            <li><a href="#" onclick="marcarOpcion(event)">Opción 4</a></li>
        </ul>
    </div>
    <div class="Contianer">
        <h1>Cambio de datos</h1>
        <form action="" id="formulario" style="display: flex">
            <input type="text" placeholder="Correo actual" class="form">
            <input type="text" placeholder="Correo nuevo" class="form">
            <input type="text" placeholder="Numero actual" class="form" id="numero_telefonoA">
            <div style="display: flex; align-items: flex-start; justify-content:center">
                <select name="codigo_pais">
                    <option value="1">+1</option>
                    <option value="44">+44 </option>
                    <!-- Agrega más opciones según sea necesario -->
                </select>
                <input type="text" placeholder="Numero nuevo" class="form" id="numero_telefono"">

            </div>


            <button type="submit" onclick="confirmarGuardado(event)"
                style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin-left: 5px; ">Guardar</button>
        </form>
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

    function confirmarGuardado(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Mostrar una alerta de confirmación
        if (confirm("¿Estás seguro de que deseas guardar los cambios?")) {
            // Si se confirma, mostrar una segunda alerta de confirmación
            alert("¡Cambios guardados con éxito!");

        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        var inputCarnet = document.getElementById('numero_telefono');

        inputCarnet.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d]/g, ''); // Elimina todo lo que no sea número
        });
    });
    document.getElementById('numero_telefono,numero_telefonoA').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Elimina todo lo que no sea número
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8); // Limita a 8 caracteres
        }
    });
</script>

</html>
