import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-usuario-card',
  imports: [],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUser;
}
