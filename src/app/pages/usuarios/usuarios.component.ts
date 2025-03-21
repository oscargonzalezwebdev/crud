import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { UsuarioCardComponent } from "../../components/usuario-card/usuario-card.component";

@Component({
  selector: 'app-usuarios',
  imports: [UsuarioCardComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  arrUsuariosObservable: IUser[] = [];
  usuariosServices = inject(UsuariosService);

  ngOnInit() {
    this.usuariosServices.getAllObservable().subscribe( {
      next: (data) => {
        this.arrUsuariosObservable = data.results;
        console.log(this.arrUsuariosObservable);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
