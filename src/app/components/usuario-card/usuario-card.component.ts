import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-card',
  imports: [RouterLink],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUser;
  usuarioService = inject(UsuariosService);

  async borrarUsuario(id: string | undefined) {
    if (confirm(`¿Estás seguro de que deseas borrar el usuario ${this.miUsuario.first_name} ${this.miUsuario.last_name}?`)) {
      if (id) {
        try {
          let response = await this.usuarioService.delete(id);
          alert(`El usuario ${this.miUsuario.first_name} ${this.miUsuario.last_name} ha sido borrado.`);
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
