import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { MotoService } from '../moto.service';

@Component({
  selector: 'app-ingreso-moto',
  templateUrl: './ingreso-moto.component.html',
  styleUrls: ['./ingreso-moto.component.css']
})
export class IngresoMotoComponent implements OnInit {

  mensaje: string;
  public moto={
    placa:'', cilindraje:''
  }

  constructor(private _router: Router,
    private _service:MotoService)    
  {}

  ngOnInit() {

  }

  ingresoMoto(obj){
        this. _service.create(obj.moto).subscribe(
        response=>this.goodCase(response),
        error=>this.badCase(error), 
        ()=>this.finallyCase());

      ;
  }

goodCase(response){
  console.log("All was fine");

}

badCase(error){
  console.log("Something was wrong...");
  console.error(error);
  this.mensaje = error;

}
finallyCase(){
  console.log("This is the final instruction to execute....");
  this._router.navigate(['/listar/vehiculos'])
}


}