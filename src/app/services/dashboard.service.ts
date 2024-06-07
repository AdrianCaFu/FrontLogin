import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    private apiUrl = environment.urlApi;
  
    constructor(private http: HttpClient) { }
  
    obtenerHorarioProfesor(idProfesor: string, diaSemana: string): Observable<any> {
      const url = `${this.apiUrl}/horario/HorarioTareas?id_profesor=${idProfesor}&dia=${diaSemana}`;
      return this.http.get<any>(url).pipe(
        catchError(this.handleError)
      );
    }
  
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('Se ha producido un error:', error.error);
      } else {
        console.error('Backend retornó el código de estado:', error.status);
      }
      return throwError('Algo falló. Por favor intente nuevamente.');
    }
  }