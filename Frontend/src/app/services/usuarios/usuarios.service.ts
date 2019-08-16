import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:3000/Usuario";
  token = "sgrshehje43246tew";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  createUsuario (data) {
   
    const uri = `${this.url}/Nuevo`;
   
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(uri, body, this.httpOptions)
  }

  validarUsuario(data)
  {
    
    const uri = `${this.url}/Login`;
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(uri, body, this.httpOptions)

  }

}
