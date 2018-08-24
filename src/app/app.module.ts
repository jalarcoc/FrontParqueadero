import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';
import { CarroFormComponent } from './carro-form/carro-form.component';
import { MotoFormComponent } from './moto-form/moto-form.component';
import { SalidaFormComponent } from './salida-form/salida-form.component';
import { SalidaVehiculosComponent } from './salida-vehiculos/salida-vehiculos.component';
import { ReciboComponent } from './recibo/recibo.component';
import { IngresoMotoComponent } from './ingreso-moto/ingreso-moto.component';
import { IngresoCarroComponent } from './ingreso-carro/ingreso-carro.component';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { ListarVehiculosService } from './listar-vehiculos.service';
import { CarroService } from './carro.service';
import { MotoService } from './moto.service';
import { SalidaService } from './salida.service';

@NgModule({
  declarations: [
    AppComponent,
    CarroFormComponent,
    MotoFormComponent,
    SalidaFormComponent,
    SalidaVehiculosComponent,
    ReciboComponent,
    IngresoMotoComponent,
    IngresoCarroComponent,
    ListarVehiculosComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListarVehiculosService, CarroService, MotoService, SalidaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
