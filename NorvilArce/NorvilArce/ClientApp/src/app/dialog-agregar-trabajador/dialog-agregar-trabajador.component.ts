import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonalService } from '../Services/personalservice.service';

@Component({
  selector: 'app-dialog-agregar-trabajador',
  templateUrl: './dialog-agregar-trabajador.component.html',
  styleUrls: ['./dialog-agregar-trabajador.component.css']
})
export class DialogAgregarTrabajadorComponent implements OnInit {
  formAgregarTrabajador: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogAgregarTrabajadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog,
    public fb: FormBuilder,
    public personalService: PersonalService) { }

    ngOnInit(): void {
      this.formAgregarTrabajador = this.fb.group({        
        apPaterno: [''],
        apMaterno: [''],
        nombre1: [''],
        nombre2: [''],        
        fchNac: [''],
        fchIngreso: ['']
      })
    }

  agregar() {
    this.personalService.crearTrabajador(this.formAgregarTrabajador.value).subscribe(
      res => {
        //cerrar dialog y actualizar tabla
        console.log("joy")
        console.log(this.formAgregarTrabajador.value);
      })
  }

}
