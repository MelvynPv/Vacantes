import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReccomendationComponent } from './components/reccomendation/reccomendation.component';
import { ToppostulantesComponent } from './components/toppostulantes/toppostulantes.component';
import { HomeAboutusComponent } from './components/home-aboutus/home-aboutus.component';
import { ListaPostulantesComponent } from './components/lista-postulantes/lista-postulantes.component';
import { PostulanteComponent } from './components/postulante/postulante.component';
import { ListavacantesComponent } from './components/listavacantes/listavacantes.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ListaEmpresaComponent } from './components/lista-empresa/lista-empresa.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

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
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
