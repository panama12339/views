<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::table('users', function (Blueprint $table) {
      /*El método de confirmación de cuenta se guarda en base de datos para que el sistema
        sepa cómo debe notificar a un usuario (puede tener 4 valores que son 
        sms, whatsapp, telegram, correo)*/
      $table->string('canal_comunicacion');
      $table->smallInteger('contador_bloqueos')->nullable();
      $table->boolean('bloqueo_permanente')->nullable();
      $table->date('fecha_nacimiento');
      $table->string('ocupacion')->nullable();
      $table->string('ci');
      $table->string('codigo_pais_telefono');
      $table->string('telefono');
      $table->string('pregunta_seguridad_a');
      $table->string('pregunta_seguridad_b');
      $table->string('respuesta_seguridad_a');
      $table->string('respuesta_seguridad_b');
    });

    //Un psicólogo pueden tener 3 estados (activo, inactivo, ausente temporalmente)
    Schema::table('psicologos', function (Blueprint $table) {
      $table->string('id')->primary();
      $table->foreignId('user_id');
      //Un psicólogo pueden tener 3 estados (activo, inactivo, ausente temporalmente)
      $table->string('estado');
      $table->timestamps();
      $table->date('fecha_funcion_titulo');
      $table->string('universidad');
      $table->string('ciudad_residencia');
      $table->string('departamento_residencia');
      $table->string('pais_residencia');
      //los archivos del cv se guardan en la tabla archivos
      $table->string('descripcion_cv')->nullable();
      $table->binary('foto');
    });

    Schema::table('pacientes', function (Blueprint $table) {
      $table->string('id')->primary();
      $table->foreignId('user_id')->nullable();
      $table->foreignId('psicologo_id')->nullable();
      $table->timestamps();
    });

    Schema::table('tutores', function (Blueprint $table) {
      $table->string('id')->primary();
      $table->timestamps();
    });

    Schema::table('paciente_tutor', function (Blueprint $table) {
      $table->string('id')->primary();
      $table->foreignId('paciente_id');
      $table
        ->foreign('tutor_id')
        ->references('id')
        ->on('tutores');
      $table->timestamps();
    });

    Schema::create('sesiones', function (Blueprint $table) {
      $table->id();
      //La sesion puede tener uno de estos 3 estados (programada, cancelada y futura)
      $table->string('estado');
      $table->boolean('pago_confirmado');
      $table->timestamp('fecha_hora_inicio')->nullable();
      $table->timestamp('fecha_hora_fin')->nullable();
      $table->foreignId('paciente_id');
      $table->foreignId('psicologo_id');
      $table->timestamps();
      $table->string('descripcion_sesion')->nullable();
    });

    Schema::create('archivos', function (Blueprint $table) {
      $table->id();
      $table->binary('archivo');
      $table->string('tipo_archivo');
      $table->foreignId('psicologo_id');
      $table
        ->foreign('sesion_id')
        ->references('id')
        ->on('sesiones');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  /*  public function down(): void
  {
  }*/
};

//$table->foreign('user_id')->references('id')->on('users');
