import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatTableModule, MatDialogModule,
  MatFormFieldModule, MatDatepickerModule, MatIconModule,
  MatInputModule, MatNativeDateModule
} from '@angular/material/'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogVerHijosComponent } from './dialog-ver-hijos/dialog-ver-hijos.component';
import { DialogAgregarTrabajadorComponent } from './dialog-agregar-trabajador/dialog-agregar-trabajador.component';
import { DialogActualizarTrabajadorComponent } from './dialog-actualizar-trabajador/dialog-actualizar-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TrabajadoresComponent,
    DialogVerHijosComponent,
    DialogAgregarTrabajadorComponent,
    DialogActualizarTrabajadorComponent
  ],
  entryComponents: [DialogVerHijosComponent,
    DialogAgregarTrabajadorComponent,
    DialogActualizarTrabajadorComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      ////{ path: '', component: HomeComponent, pathMatch: 'full' },
      ////{ path: 'counter', component: CounterComponent },
      ////{ path: 'fetch-data', component: FetchDataComponent },
      { path: '', component: TrabajadoresComponent }
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
