import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';

@Component({
  selector: 'app-dialog-actualizar-trabajador',
  templateUrl: './dialog-actualizar-trabajador.component.html',
  styleUrls: ['./dialog-actualizar-trabajador.component.css']
})
export class DialogActualizarTrabajadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogActualizarTrabajadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit():void {
  }

}
