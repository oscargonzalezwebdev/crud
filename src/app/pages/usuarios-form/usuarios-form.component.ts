import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  imports: [ReactiveFormsModule],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent {
  @Input() idUsuario: string = "";
  formUsuario: FormGroup = new FormGroup({}, []);
  usuario!: IUser;
  usuariosServices = inject(UsuariosService);

  ngOnInit() {
    if (this.idUsuario) {
      this.usuariosServices.getById(this.idUsuario).subscribe({
        next: (usuario: IUser) => {
          this.usuario = usuario;
          this.formUsuario = new FormGroup({
            _id: new FormControl(this.idUsuario || null, []),
            id: new FormControl(this.usuario?.id || null, []),
            first_name: new FormControl(this.usuario?.first_name || "", []),
            last_name: new FormControl(this.usuario?.last_name || "", []),
            username: new FormControl(this.usuario?.username || "", []),
            email: new FormControl(this.usuario?.email || "", []),
            image: new FormControl(this.usuario?.image || "", []),
            password: new FormControl(this.usuario?.password || "", []),
          });
          console.log(this.usuario);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.formUsuario = new FormGroup({
        _id: new FormControl(null, []),
        id: new FormControl(null, []),
        first_name: new FormControl("", []),
        last_name: new FormControl("", []),
        username: new FormControl("", []),
        email: new FormControl("", []),
        image: new FormControl("", []),
        password: new FormControl("", []),
      });
    }
  }
  
  guardarUsuario() {
    if(this.formUsuario.value._id) {

    } else {

    }
  }
}
