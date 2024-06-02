import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ModalComponent } from './modal/modal.component';
import { HorarioComponent } from './horario/horario.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  { path: 'modal', component: ModalComponent },
  { path: 'horario', component: HorarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
