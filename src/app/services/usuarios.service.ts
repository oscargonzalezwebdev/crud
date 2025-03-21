import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = "https://peticiones.online/api/users";

  getAllObservable(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseUrl);
  }
  
  constructor() { }
}
