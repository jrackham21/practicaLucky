import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonalService } from '../Services/personalservice.service';

@Component({
  selector: 'app-dialog-actualizar-trabajador',
  templateUrl: './dialog-actualizar-trabajador.component.html',
  styleUrls: ['./dialog-actualizar-trabajador.component.css']
})
export class DialogActualizarTrabajadorComponent implements OnInit {
  formActualizarTrabajador: FormGroup;
  trabajador: Personal;

  constructor(public dialogRef: MatDialogRef<DialogActualizarTrabajadorComponent>,
    public fb: FormBuilder,
    public personalService: PersonalService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.trabajador = this.data.trabajador;
    this.formActualizarTrabajador = this.fb.group({
      idPersonal: this.trabajador.idPersonal,
      apPaterno: this.trabajador.apPaterno,
      apMaterno: this.trabajador.apMaterno,
      nombre1: this.trabajador.nombre1,
      nombre2: this.trabajador.nombre2,
      fchNac: this.trabajador.fchNac,
      fchIngreso: this.trabajador.fchIngreso
  })
}

  actualizar() {
    this.personalService.actualizarTrabajador(this.formActualizarTrabajador.value).subscribe(
    res => {
        console.log(this.formActualizarTrabajador.value);
    })
  }
}

interface Personal {
  idPersonal: number;
  apPaterno: string;
  apMaterno: string;
  nombre1: string;
  nombre2: string;
  fchNac: Date;
  fchIngreso: Date;
}
