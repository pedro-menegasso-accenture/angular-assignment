import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  registerUsuario(usuarioNovo: User) {
    return this.http.post('http://localhost:3000/users', usuarioNovo);
  }

  constructor(
    private http: HttpClient
  ) { }

}
