import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { CarroService } from '../carro.service';


@Component({
  selector: 'app-ingreso-carro',
  templateUrl: './ingreso-carro.component.html',
  styleUrls: ['./ingreso-carro.component.css']
})
export class IngresoCarroComponent implements OnInit {
  mensaje:string;
 
  public carro={
    placa:''
   };

   constructor(private _router:Router,
    private _service:CarroService) { }

   ngOnInit() {
 
  }

  ingresoCarro(obj){
    this._service.create(obj.carro).subscribe(
      response=>this.goodCase(response),
      error=>this.badCase(error), 
      ()=>this.finallyCase());
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
  this._router.navigate(['/listar/vehiculos']);
}


}