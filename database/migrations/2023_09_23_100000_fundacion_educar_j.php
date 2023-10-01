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
    Schema::create('bloqueos', function (Blueprint $table) {
      $table->id();
      $table->foreignId('psicologo_id');
      $table->foreignId('paciente_id');
      $table->timestamps();
      $table->boolean('isBloqueado');
    });
  }

  /**
   * Reverse the migrations.
   */
  /*  public function down(): void
  {
    Schema::dropIfExists('solicitud_tutor');
  }*/
};
