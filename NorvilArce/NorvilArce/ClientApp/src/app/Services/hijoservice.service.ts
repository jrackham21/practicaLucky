import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HijoService {
  hijos: Hijo[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  listarHijosPorTrabajador(idPersonal): Observable<Hijo[]> {
    return this.http.get<Hijo[]>(this.baseUrl + 'api/hijos/getByTrabajador/' + idPersonal)
      .pipe(
        catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

interface Hijo {
  idDerhab: number;
  idPersonal: number;
  apPaterno: string;
  apMaterno: string;
  nombre1: string;
  nombre2: string;
  nombreCompleto: string;
  fchNac: Date;
}
