import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorarioService } from '../services/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  horario: any;  //TODO crear una clase o model horario con los campos que se obtienen de la base de datos

  constructor(
    private route: ActivatedRoute,
    private horarioService: HorarioService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const profesorId = params['id'];
      const dia = params['dia'];

      this.horarioService.getHorario(profesorId, dia).subscribe(data => {
        this.horario = data;
      });
    });
  }

}
