import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostulantesService {

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
  constructor() { }

  ObtenerPostulaciones (maximo) {
    return this.Postulantes;
  }

  ObtenerPostulanteByUrl (cUrl) {
    return this.Postulantes.find(x=>x.cUrl==cUrl);
  }
}
