import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userLoginOn: boolean = false;
  searchForm: FormGroup;
  horasProfesor: any[] = [];
  mostrarFooter: boolean = true; // O false, dependiendo de tus necesidades
  

  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService, private router: Router) {
    this.searchForm = this.formBuilder.group({
      idProfesor: ['', Validators.required],
      diaSemana: ['', Validators.required]
    });
  }

  buscarHoras() {
    // Lógica para buscar las horas del profesor
    const idProfesor = this.searchForm.get('idProfesor')?.value;
    const diaSemana = this.searchForm.get('diaSemana')?.value;
    this.dashboardService.obtenerHorarioProfesor(idProfesor, diaSemana).subscribe(
      (data) => {
        this.horasProfesor = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  salir() {
    this.router.navigateByUrl('/');
  }
}
 
