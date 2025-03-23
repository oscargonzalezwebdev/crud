import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-usuario',
  imports: [RouterLink],
  templateUrl: './vista-usuario.component.html',
  styleUrl: './vista-usuario.component.css'
})
export class VistaUsuarioComponent {
  @Input() idUsuario: string= "";
  elUsuario!: IUser;
  usuariosServices = inject(UsuariosService)

  ngOnInit() {
  
    this.usuariosServices.getById(this.idUsuario).subscribe({
      next: (usuario) => {
        this.elUsuario = usuario;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  async borrarUsuario(id: string | undefined) {
    if (confirm(`¿Estás seguro de que deseas borrar el usuario ${this.elUsuario.first_name} ${this.elUsuario.last_name}?`)) {
      if (id) {
        try {
          let response = await this.usuariosServices.delete(id);
          alert(`El usuario ${this.elUsuario.first_name} ${this.elUsuario.last_name} ha sido borrado.`);
          window.location.href = '/home';
        } catch (error) {
          console.error('Error al borrar el usuario:', error);
          alert('Hubo un error al intentar borrar el usuario. Por favor, inténtalo de nuevo.');
        }
      } else {
        alert('ID de usuario no válido.');
      }
    } else {
      alert('La acción fue cancelada.');
    }
  }
}
