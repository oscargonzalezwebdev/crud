import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VistaUsuarioComponent } from './pages/vista-usuario/vista-usuario.component';

export const routes: Routes = [

    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: UsuariosComponent },
    { path: "usuario/:idUsuario", component: VistaUsuarioComponent },
    { path: "**", redirectTo: "home" }
    
];
