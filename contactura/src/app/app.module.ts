import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './SharedComponents/navbar/navbar.component';
//imports do material design
 import {MatCardModule} from '@angular/material/card';
 import {MatButtonModule} from '@angular/material/button';
 import {MatInputModule} from '@angular/material/input';
 import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaContatosComponent,
    FormUsuariosComponent,
    FormContatosComponent,
    ListaUsuariosComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
