<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    //Datos iniciales de la base de datos
    $roleAdministrador = Role::create(['name' => 'administrador']);
    $roleTutor = Role::create(['name' => 'tutor']);
    $rolePaciente = Role::create(['name' => 'paciente']);
    $rolePsicologo = Role::create(['name' => 'psicologo']);

    $user = new User();
    $user->name = 'administrador';
    $user->email = 'administrador@gmail.com';
    $user->password = bcrypt('administrador');
    $user->save();
    $user->assignRole($roleAdministrador);

    //Todos los datos a continuación son de prueba y deben eliminarse antes de pasar a fase de produccion

    //$permission = Permission::create(['name' => 'edit articles']);

    \App\Models\User::factory(100)->create();

    $user = new User();
    $user->name = 'psicologo';
    $user->email = 'psicologo@gmail.com';
    $user->password = bcrypt('psicologo');
    $user->save();
    $user->assignRole($rolePsicologo);

    $user = new User();
    $user->name = 'tutor';
    $user->email = 'tutor@gmail.com';
    $user->password = bcrypt('tutor');
    $user->save();
    $user->assignRole($roleTutor);

    $user = new User();
    $user->name = 'pacientee';
    $user->email = 'paciente@gmail.com';
    $user->password = bcrypt('paciente');
    $user->save();
    $user->assignRole($rolePaciente);

    $user = new User();
    $user->name = 'sinrol';
    $user->email = 'sinrol@gmail.com';
    $user->password = bcrypt('sinrol');
    $user->save();
  }
}
