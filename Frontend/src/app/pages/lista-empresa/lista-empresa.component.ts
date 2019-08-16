import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from  '@angular/router'
import {EmpresasService} from 'src/app/services/empresas/empresas.service'

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styles: []
})
export class ListaEmpresaComponent implements OnInit {
  cUrl='';
  Empresas;
  constructor(private svcEmpresas: EmpresasService,private route: ActivatedRoute) {

    
   }

  ngOnInit() {
    this.ObtenerListaVacantes(0)
  }

  ObtenerListaVacantes(maximo){
    this.Empresas=this.svcEmpresas.ObtenerListaEmpresa(maximo);
  }
}
