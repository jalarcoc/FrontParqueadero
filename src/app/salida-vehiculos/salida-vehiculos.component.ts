import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SalidaService } from '../salida.service';

@Component({
  selector: 'app-salida-vehiculos',
  templateUrl: './salida-vehiculos.component.html',
  styleUrls: ['./salida-vehiculos.component.css']
})
export class SalidaVehiculosComponent implements OnInit {
  public vehiculo={
    placa:''
  };
  public recibo={
    placa:'',
    fechaIngreso:'',
    fechaSalida:'',
    total:''
  };
  constructor(private _router:Router,
    private _service:SalidaService) { }
  
    ngOnInit() {
    }
    
    salidaVehiculo(obj){
      this._service.salir(obj.vehiculo).subscribe(res=>{
        console.log(res);
        this.recibo=res;
        this._router.navigate(['/vehiculo/salida']);
      });
    }
  
  
  }