import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostulantesService {

  Postulantes=[
    {"Nombre":"../../../assets/img/slides/slide_1.jpg","Nombre":"Banner 1","href":""},
    {"url":"../../../assets/img/slides/slide_2.jpg","Nombre":"Banner 2","href":""},
    {"url":"../../../assets/img/slides/slide_3.jpg","Nombre":"Banner 3","href":""}
  ]
  constructor() { }

  ObtenerPostulaciones (maximo) {
    return this.Postulantes;
  }
}
