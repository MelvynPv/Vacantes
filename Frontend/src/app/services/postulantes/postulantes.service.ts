import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostulantesService {
  url = "http://localhost:3000/Postulante";
  token = "sgrshehje43246tew";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Postulantes=[
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    {"cNombre":"Harley Adrian Medina Estrella","cImg":"../../../assets/img/postulantes/persona.jpg","cUrl":"postulante-harley-adrian-medina-estrella-1","Conocimientos":"Javascript"},
    
  ]
  constructor(private http: HttpClient) { }
  guardarEntidad (data) {
   
    const uri = `${this.url}/Nuevo`;
   
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(uri, body, this.httpOptions)
  }

  ObtenerPostulaciones (maximo) {
    return this.Postulantes;
  }

  ObtenerPostulanteByUrl (cUrl) {
    return this.Postulantes.find(x=>x.cUrl==cUrl);
  }
}
