import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReccomendationComponent } from './components/reccomendation/reccomendation.component';
import { ToppostulantesComponent } from './components/toppostulantes/toppostulantes.component';
import { HomeAboutusComponent } from './components/home-aboutus/home-aboutus.component';
import { ListaPostulantesComponent } from './pages/lista-postulantes/lista-postulantes.component';
import { PostulanteComponent } from './pages/postulante/postulante.component';
import { ListavacantesComponent } from './pages/listavacantes/listavacantes.component';
import { VacanteComponent } from './pages/vacante/vacante.component';
import { ListaEmpresaComponent } from './pages/lista-empresa/lista-empresa.component';
import { FormVacantesComponent } from './components/form-vacantes/form-vacantes.component';
import { FormEmpresasComponent } from './components/form-empresas/form-empresas.component';
import { FormPostulantesComponent } from './components/form-postulantes/form-postulantes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    CommentsComponent,
    ReccomendationComponent,
    ToppostulantesComponent,
    HomeAboutusComponent,
    ListaPostulantesComponent,
    PostulanteComponent,
    ListavacantesComponent,
    VacanteComponent,
    ListaEmpresaComponent,
    FormVacantesComponent,
    FormEmpresasComponent,
    FormPostulantesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
