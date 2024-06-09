import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuardiaService {


  constructor(private http: HttpClient) { }

  obtenerGuardiasDia(diaSemana: string): Observable<any> {
    return this.http.get<any>(`${environment.urlApi}/horario/guardias?dia=${diaSemana}`).pipe(
      catchError(this.handleError)
    )
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
