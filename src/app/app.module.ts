import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './auth/login/login.component';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { HorarioComponent } from './horario/horario.component';
import { LoginService } from './services/auth/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ModalComponent,
    HorarioComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
