import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = "https://peticiones.online/api/users";

  getAllObservable( url = "https://peticiones.online/api/users?page=1"): Observable<IResponse> {
    return this.httpClient.get<IResponse>(url);
  }

  getById(_id: string): Observable<IUser> {
    const url = `${this.baseUrl}/${_id}`;
    return this.httpClient.get<IUser>(url);
  }
  
  constructor() { }
}
