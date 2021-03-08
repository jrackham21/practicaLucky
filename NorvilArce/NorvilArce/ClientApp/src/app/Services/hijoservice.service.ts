import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarHijosPorTrabajador(idPersonal): Observable<Hijo[]> {
    return this.http.get<Hijo[]>(this.baseUrl + 'api/hijos/getByTrabajador/' + idPersonal)
      .pipe(
        catchError(this.errorHandler));
  }

  agregarHijo(hijo: Hijo): Observable<Hijo> {
    return this.http.post<Hijo>(this.baseUrl + 'api/hijos/create/', JSON.stringify(hijo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  } 

  eliminarHijo(id) {
    return this.http.delete<Hijo>(this.baseUrl + 'api/hijos/delete/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
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
