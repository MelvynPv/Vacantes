import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  url = "http://localhost:3000/Empresa";
  token = "sgrshehje43246tew";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Empresas=[
    {"cNombreEmpresa":"Mayansoft","cUrl":"empresa-mayansoft","cRFC":"BOT0828208","cImagen":"../../../assets/img/empresas/mayansoft-logo.png",Vacantes:[ {"cTitulo":"Se Solicita Ingeniero de Sw","cUrl":"blueocena-solicita-ingeniero-de-sw","ConocimientosRequeridos":"Javascript","iCantidadDisponibles":"10","iCantidadOcupadas":"1","cPuesto":"Ingeniero de SW", "cDescripcion":"postulante-harley-adrian-medina-estrella-1","dSueldo":"30000"}]},     
  ]
  constructor(private http: HttpClient) { }
  guardarEntidad (data) {
   
    const uri = `${this.url}/Nuevo`;
   
    let body = JSON.stringify({
      ...data
    })
    console.log(body);
    return this.http.post(uri, body, this.httpOptions)
  }

  ObtenerListaEmpresa (maximo) {
    return this.Empresas;
  }

  ObtenerEmpresaByUrl (cUrl) {

    return this.Empresas.find(x=>x.cUrl==cUrl);
  }





}
