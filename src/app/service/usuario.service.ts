import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      'https://integra-ja.herokuapp.com/usuarios',
      usuario,
      this.token
    );
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://integra-ja.herokuapp.com/usuarios/${id}`,
      this.token
    );
  }
}
