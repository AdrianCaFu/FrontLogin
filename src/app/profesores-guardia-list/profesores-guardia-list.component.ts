import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { GuardiaService } from '../services/guardia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profesores-guardia-list',
  templateUrl: './profesores-guardia-list.component.html',
  styleUrls: ['./profesores-guardia-list.component.css']
})
export class ProfesoresGuardiaListComponent implements OnInit {

  @Input() diaSemana: string = '';

  public guardias: any[] = [];
  guardiaSubscription: Subscription | undefined;

  constructor(
    private guardiaService: GuardiaService
  ) { }

  ngOnInit(): void {
    
    console.log('dia: '+this.diaSemana)
    if (this.diaSemana) {
      this.mostrarGuardia(this.diaSemana);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['diaSemana'] && !changes['diaSemana'].firstChange) {
      this.mostrarGuardia(changes['diaSemana'].currentValue);
    }
  }

  mostrarGuardia(diaSemana: string): void{
    this.guardiaSubscription = this.guardiaService.obtenerGuardiasDia(diaSemana).subscribe({
      next: (data) => {
        this.guardias = data;
      },
      error: (error) => {
        console.error('Error al obtener las guardias:', error);
      }
    });
  }

}
