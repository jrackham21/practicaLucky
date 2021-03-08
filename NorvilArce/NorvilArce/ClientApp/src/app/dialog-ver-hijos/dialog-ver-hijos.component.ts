import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { HijoService } from '../Services/hijoservice.service';

@Component({
  selector: 'app-dialog-ver-hijos',
  templateUrl: './dialog-ver-hijos.component.html',
})
export class DialogVerHijosComponent implements OnInit {
  hijos: Hijo[];  

  constructor(
    public hijoService: HijoService,
    public dialogRef: MatDialogRef<DialogVerHijosComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void{
    this.listarHijosPorTrabajador(this.data.msj);
   }

  listarHijosPorTrabajador(idPersonal): void {
    this.hijoService.listarHijosPorTrabajador(idPersonal).subscribe(
      (data: Hijo[]) => {
        console.log(data);
        this.hijos = data;
      })
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
