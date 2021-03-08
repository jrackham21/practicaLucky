import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { PersonalService } from '../Services/personalservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVerHijosComponent } from '../dialog-ver-hijos/dialog-ver-hijos.component';
import { DialogAgregarTrabajadorComponent } from '../dialog-agregar-trabajador/dialog-agregar-trabajador.component';
import { DialogActualizarTrabajadorComponent } from '../dialog-actualizar-trabajador/dialog-actualizar-trabajador.component';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  
  public trabajadores: Personal[];
  public trabajadorActual: Personal;
  
  constructor(public dialog: MatDialog,
    public personalService: PersonalService) {
  }
  ngOnInit(): void {
    this.listarTrabajadores();
  }

  listarTrabajadores(): void {
    this.personalService.listarTrabajadores().subscribe(
      (data: Personal[]) => {
        console.log(data);
        this.trabajadores = data;
      })   
  }

  //agregarTrabajadores(personal: Personal): Boolean {
  //  this.http.post(this.baseUrl + 'api/trabajadores/create', personal).pipe(result => {
  //    return result;
  //  }, error => console.error(error));
  //}

  //actualizarTrabajadores(personal: Personal): Boolean {
  //  this.http.put(this.baseUrl + 'api/trabajadores/update', personal).pipe(result => {
  //    return result;
  //  }, error => console.error(error));
  //}

  eliminarTrabajador(id): void {
    this.personalService.eliminarTrabajador(id).subscribe();
  }
    
  
  openDialogVerHijos(idPersonal:number) {
    const dialogRef = this.dialog.open(DialogVerHijosComponent,
      {
        data: { msj: idPersonal }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAgregarTrabajador() {
    const dialogRef = this.dialog.open(DialogAgregarTrabajadorComponent,
      {
        width: '500px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogActualizar(trabajador: Personal) {
    const dialogRef = this.dialog.open(DialogActualizarTrabajadorComponent,
      {
        data: { trabajador: trabajador }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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




