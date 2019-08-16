import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VacantesService {
  url = "http://localhost:4200/vacantes";
  token = "sgrshehje43246tew";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    constructor(private http: HttpClient) { }

  ObtenerVacantes (maximo) {
    const uri = `${this.url}/obtenertodos`;
    return this.http.get(this.url);
  }

  ObtenerVacantesByUrl (cUrl) {
    const uri = `${this.url}/${cUrl}`;
    return this.http.get(uri)
  }

  guardarVacante (data) {
    console.log(data);
    const uri = `${this.url}/nuevo`;
    let body = JSON.stringify({
      ...data
    })
    return this.http.post(uri, body, this.httpOptions)
  }

  actualizarVacante (data,id) {
    
    const uri = `${this.url}/modificar/${id}`;
    let body = JSON.stringify({
      id: id,
      cTitulo: data.cTitulo,
      cUrl: data.cUrl,
      ConocimientosRequeridos: data.ConocimientosRequeridos,
      iCantidadDisponibles: data.cTitulo,
      iCantidadOcupadas: data.cUrl,
      cPuesto: data.ConocimientosRequeridos,
      cDescripcion: data.cDescripcion,
      dSueldo: data.dSueldo,
     

    })
    return this.http.put(uri, body, this.httpOptions);
  }
}



