import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { PersonalService } from '../Services/personalservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVerHijosComponent } from '../dialog-ver-hijos/dialog-ver-hijos.component';
import { DialogAgregarTrabajadorComponent } from '../dialog-agregar-trabajador/dialog-agregar-trabajador.component';
import { DialogActualizarTrabajadorComponent } from '../dialog-actualizar-trabajador/dialog-actualizar-trabajador.component';
import { DialogAgregarHijoComponent } from '../dialog-agregar-hijo/dialog-agregar-hijo.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  public trabajadores: Personal[];
  dataSource = null;
  columnas: string[] = ['idPersonal', 'nombreCompleto', 'fchNac', 'fchIngreso', 'acciones'];

  constructor(public dialog: MatDialog,
    public personalService: PersonalService) {
  }
  ngOnInit(): void {
    this.listarTrabajadores();
    this.dataSource = new MatTableDataSource(this.trabajadores);
  }

  listarTrabajadores(): void {
    this.personalService.listarTrabajadores().subscribe(
      (data: Personal[]) => {
        console.log(data);
        this.trabajadores = data;
      })
  }

  eliminarTrabajador(id): void {
    this.personalService.eliminarTrabajador(id).subscribe();
  }

  openDialogVerHijos(idPersonal: number) {
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
      this.listarTrabajadores();
    });
  }

  openDialogActualizar(trabajador: Personal) {
    const dialogRef = this.dialog.open(DialogActualizarTrabajadorComponent,
      {
        data: { trabajador: trabajador }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.listarTrabajadores();
    });
  }

  openDialogAgregarHijo(id) {
    const dialogRef = this.dialog.open(DialogAgregarHijoComponent,
      {
        width: '500px',
        data: { id: id }
      });

    dialogRef.afterClosed().subscribe();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
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




