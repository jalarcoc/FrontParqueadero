import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SalidaService } from '../salida.service';



@Component({
  selector: 'app-salida-vehiculos',
  templateUrl: './salida-vehiculos.component.html',
  styleUrls: ['./salida-vehiculos.component.css']
})
export class SalidaVehiculosComponent implements OnInit {

  mensaje : string;
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
      this._service.salir(obj.vehiculo).subscribe(
        response=>this.goodCase(response),
        error=>this.badCase(error), 
        ()=>this.finallyCase());
    }

    goodCase(response){
      console.log("All was fine");
      this.recibo=response;
      this._router.navigate(['/vehiculo/salida']);
    }
    
    badCase(error){
      console.log("Something was wrong...");
      console.error(error);
      this.mensaje = error;

    }
    finallyCase(){
      console.log("This is the final instruction to execute....");
    }
    
  
  }