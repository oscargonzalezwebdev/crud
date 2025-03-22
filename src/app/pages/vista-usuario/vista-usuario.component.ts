import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-vista-usuario',
  imports: [],
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
}
