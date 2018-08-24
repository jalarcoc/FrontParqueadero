import {Routes} from '@angular/router';
import{IngresoMotoComponent} from './ingreso-moto/ingreso-moto.component';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { IngresoCarroComponent } from './ingreso-carro/ingreso-carro.component';
import { SalidaVehiculosComponent } from './salida-vehiculos/salida-vehiculos.component';
import { ReciboComponent } from './recibo/recibo.component';

export const appRoutes:Routes = [
    {path: 'moto/ingreso', component: IngresoMotoComponent},
    {path: 'carro/ingreso', component: IngresoCarroComponent},
    {path: 'listar/vehiculos', component: ListarVehiculosComponent},
    {path: 'vehiculo/salida', component:SalidaVehiculosComponent },
    {path: 'recibo', component:ReciboComponent},
    {path: '', redirectTo :'/listar/vehiculos',pathMatch : 'full'},
]