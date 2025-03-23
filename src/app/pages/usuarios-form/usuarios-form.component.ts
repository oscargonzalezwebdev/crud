import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios-form',
  imports: [],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent {
@Input() idUsuario: string = "";

ngOnInit() {
  
  console.log(this.idUsuario);
  }
}
