import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaEmpresaComponent } from './pages/lista-empresa/lista-empresa.component';
import { ListaPostulantesComponent } from './pages/lista-postulantes/lista-postulantes.component';
import { ListavacantesComponent } from './pages/listavacantes/listavacantes.component';
import { PostulanteComponent } from './pages/postulante/postulante.component';
import { VacanteComponent } from './pages/vacante/vacante.component';
import { FormEmpresasComponent  } from './components/form-empresas/form-empresas.component';
import { FormPostulantesComponent  } from './components/form-postulantes/form-postulantes.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'empresas', component: ListaEmpresaComponent},
  {path:'empresas/completa-perfil', component: FormEmpresasComponent},
  {path:'postulantes', component: ListaPostulantesComponent},
 
  {path:'postulantes/completa-perfil', component: FormPostulantesComponent},
  {path:'vacantes', component: ListavacantesComponent},
  {path:'vacantes/add', component: VacanteComponent},
  {path:'vacantes/:cUrl', component: VacanteComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
