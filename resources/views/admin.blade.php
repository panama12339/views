<!-- resources/views/nueva_vista.blade.php -->

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    @routes
    @viteReactRefresh
    @vite('resources/js/app.tsx')

    <style>
        /* Estilos para centrar el formulario */
        body {
            display: flex;
            align-items: flex-start;
            /* Alinea hacia arriba */
            height: 100vh;
            margin: 0;
        }

        #formulario {
            width: 1200px;
            height: 550px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-left: 270px;
            /* Añade un margen a la izquierda */
            margin-top: 170px;
            /* Añade un margen hacia abajo */
        }

        #formulario input[class="form"] {
            height: 26px;
            width: 252px;
        }



        label,
        input {
            display: block;
            width: 50%;
            margin-bottom: 1px;
            margin-top: 6px
                /* Reducido el espacio entre campos */
        }

        input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
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
    </style>
</head>

<body class="font-sans antialiased">
    <div id="image"></div>




    <div id="left-menu">
    </div>
    <!-- Formulario HTML centrado -->
    <div id="formulario" style="border: 5px solid #006400;">
        <h2 style="font-size: 24px; color: #006400;font-weight: bold;text-align: center">Registrar Psicologo</h2>
        <form action="" method="POST">
            @csrf
            <div style="display: flex; gap: 10px; align-items: center;">
                <div style="flex: 1;">
                    <input type="text" name="nombre" required placeholder="Nombre" class="form"><br>
                    <input type="text" name="email" required placeholder="Apellidos" class="form"><br>
                    <input type="date" name="email" required class="form"><br>
                    <input type="date" name="email" required
                        placeholder="Fecha de función de título"class="form"><br>
                    <input type="text" name="email" required placeholder="Universidad"class="form"><br>
                    <input type="text" name="email" required placeholder="Ciudad de residencia"class="form"><br>
                    <input type="text" name="email" required placeholder="País de residencia"class="form"><br>
                    <input type="text" name="email" required placeholder="Carnet de identidad"class="form"
                        id="carnet_identidad"><br>
                    <input type="password" name="email" required placeholder="Contraseña"class="form"
                        id="contrasenia"><br>
                    <input type="password" name="email" required placeholder="Repetir contraseña"class="form"><br>
                </div>
                <div style="flex: 1; margin-top: 40px; margin-left: 50px">
                    <div style="position:relative;">
                        <input type="file" id="archivo" name="archivo" accept=".pdf,.doc,.docx"
                            style="position:absolute; left:0; top:0; opacity:0; z-index: -1;" multiple
                            onchange="showSelectedFiles(event)">
                        <label for="archivo"
                            style="cursor:pointer; padding: 10px 20px; color: #312121; border-radius: 5px; border:1px solid #6f6d6d; height:30px; display:flex; align-items: center; justify-content: center; z-index: 1;">Adjuntar
                            archivo/s CV</label>
                    </div>

                    <div id="fileList"></div>
                    <textarea id="descripcion" name="descripcion" rows="12" cols="50" placeholder="Descripción..."></textarea><br>
                    <button type="button" onclick="cancelar()"
                        style="padding: 10px 20px; background-color: #007bff; color: #fff;border: none; border-radius: 4px; cursor: pointer; margin-left: 45px; width:180px">Cancelar</button>
                    <button type="submit"
                        style="padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin-left: 5px; ">Registrar
                        Psicologo</button>
                </div>
                <div style="flex: 1; margin-top: 4px;margin-left: 50px">
                    <input type="text" name="email" required placeholder="Correo" class="form"><br>
                    <div style="display: flex; align-items: center; margin-bottom:50px">
                        <select name="codigo_pais">
                            <option value="1">+1</option>
                            <option value="44">+44 </option>
                            <!-- Agrega más opciones según sea necesario -->
                        </select>
                        <input type="text" name="numero_telefono" required placeholder="Número de teléfono"
                            class="form" id="numero_telefono">
                    </div>
                    <div style="flex: 1; margin-top: -30px; margin-left: 5px">
                        Metodo de <br>confirmacion<br> de cuenta
                        <div style="flex: 1; margin-top: -70px;margin-left: 120px; margin-bottom:50px">
                            <input type="radio" name="metodo_confirmacion" value="email"> Correo Electrónico<br>
                            <input type="radio" name="metodo_confirmacion" value="sms"> Whatsapp<br>
                            <input type="radio" name="metodo_confirmacion" value="llamada"> Telegram<br>
                            <input type="radio" name="metodo_confirmacion" value="llamada"> sms<br>
                        </div>

                    </div>
                    <input type="text" name="email" required placeholder="Pregunta de seguridad 1"
                        class="form"><br>
                    <input type="text" name="email" required placeholder="Pregunta de seguridad 2"
                        class="form"><br>
                    <input type="text" name="email" required placeholder="Pregunta de seguridad 3"
                        class="form"><br>
                    <input type="text" name="email" required placeholder="Pregunta de seguridad 4"
                        class="form"><br>

                </div>
            </div>
            <br>
        </form>

    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var inputCarnet = document.getElementById('carnet_identidad', 'numero_telefono');

            inputCarnet.addEventListener('input', function() {
                this.value = this.value.replace(/[^\d]/g, ''); // Elimina todo lo que no sea número
            });
        });
        document.getElementById('numero_telefono').addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, ''); // Elimina todo lo que no sea número
            if (this.value.length > 8) {
                this.value = this.value.slice(0, 8); // Limita a 8 caracteres
            }
        });
    </script>
    <script>
        function showSelectedFiles(event) {
            var fileListContainer = document.getElementById('fileList');
            var files = event.target.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                var fileEntry = document.createElement('div');
                fileEntry.innerHTML = `
              <span>${file.name}</span>
              <button type="button" onclick="removeFile(this)">
                <i class="fas fa-trash" style="color: red;"></i>
              </button>
            `;

                fileListContainer.appendChild(fileEntry);
            }
        }

        function removeFile(button) {
            button.parentElement.remove();
        }
    </script>
</body>

</html>
