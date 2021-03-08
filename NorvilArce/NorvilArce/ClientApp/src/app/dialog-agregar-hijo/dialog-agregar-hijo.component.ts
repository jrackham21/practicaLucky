import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HijoService } from '../Services/hijoservice.service';

@Component({
  selector: 'app-dialog-agregar-hijo',
  templateUrl: './dialog-agregar-hijo.component.html',
  styleUrls: ['./dialog-agregar-hijo.component.css']
})
export class DialogAgregarHijoComponent implements OnInit{
  formAgregarHijo: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogAgregarHijoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialog,
    public fb: FormBuilder,
    public hijoService: HijoService) { }

  ngOnInit(): void {
    this.formAgregarHijo = this.fb.group({
      idPersonal: this.data.id,
      apPaterno: [''],
      apMaterno: [''],
      nombre1: [''],
      nombre2: [''],
      fchNac: ['']
    })
  }

  agregarHijo() {
    this.hijoService.agregarHijo(this.formAgregarHijo.value).subscribe(
      res => {        
        console.log(this.formAgregarHijo.value);
      })
  }
}
