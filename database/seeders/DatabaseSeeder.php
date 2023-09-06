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
    $roleAdministrador = Role::create(['name' => 'administrador']);
    $roleTutor = Role::create(['name' => 'tutor']);
    $rolePaciente = Role::create(['name' => 'paciente']);
    $rolePsicologo = Role::create(['name' => 'psicologo']);

    $permission = Permission::create(['name' => 'edit articles']);

    \App\Models\User::factory(100)->create();

    $user = new User();
    $user->name = 'administrador';
    $user->email = 'administrador@gmail.com';
    $user->password = bcrypt('administrador');
    $user->save();
    $user->assignRole($roleAdministrador);

    $user = new User();
    $user->name = 'psicologo';
    $user->email = 'psicologo@gmail.com';
    $user->password = bcrypt('psicologo');
    $user->save();
    $user->assignRole($rolePsicologo);
  }
}
