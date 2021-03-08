import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class PersonalService {  
  trabajadores: Personal[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  listarTrabajadores(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.baseUrl + 'api/trabajadores/read')
      .pipe(
      catchError(this.errorHandler)
    )
  }

  crearTrabajador(trabajador): Observable<Personal> {
    return this.http.post<Personal>(this.baseUrl + 'api/trabajadores/create', JSON.stringify(trabajador), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  actualizarTrabajador(trabajador): Observable<Personal> {
    return this.http.put<Personal>(this.baseUrl + 'api/trabajadores/update', JSON.stringify(trabajador), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  eliminarTrabajador(id) {
    return this.http.delete<Personal>(this.baseUrl + 'api/trabajadores/delete/' + id, this.httpOptions)
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


interface Personal {
  idPersonal: number;
  apPaterno: string;
  apMaterno: string;
  nombre1: string;
  nombre2: string;
  nombreCompleto: string;
  fchNac: Date;
  fchIngreso: Date;
}
