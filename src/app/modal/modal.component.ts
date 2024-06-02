import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioService } from '../services/horario.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  public profesorId: string = '';
  public dia: string = '';

  constructor(
    private horarioService: HorarioService,
    private router: Router
  ) { }

  getHorario() {
    this.router.navigate(['/horario'], {queryParams: { id: this.profesorId, day: this.dia }})
  }

}
