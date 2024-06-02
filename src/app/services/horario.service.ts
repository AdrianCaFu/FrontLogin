import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HorarioService {

    private apiUrl = 'http://localhost:8080/api/guardias/horario/HorarioTareas';

    constructor(private http: HttpClient) {}

    getHorario(professorId: string, day: string): Observable<any> {
        let params = new HttpParams().set('id', professorId).set('day', day);
        return this.http.get(this.apiUrl, { params });
      }
}