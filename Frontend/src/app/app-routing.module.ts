import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaEmpresaComponent } from './pages/lista-empresa/lista-empresa.component';
import { ListaPostulantesComponent } from './pages/lista-postulantes/lista-postulantes.component';
import { ListavacantesComponent } from './pages/listavacantes/listavacantes.component';
import { PostulanteComponent } from './pages/postulante/postulante.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'empresas', component: ListaEmpresaComponent},
  {path:'postulantes', component: ListaPostulantesComponent},
  {path:'postulantes/:cUrl', component: PostulanteComponent},
  {path:'vacantes', component: ListavacantesComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
