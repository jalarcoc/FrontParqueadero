import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { MotoService } from '../moto.service';

@Component({
  selector: 'app-ingreso-moto',
  templateUrl: './ingreso-moto.component.html',
  styleUrls: ['./ingreso-moto.component.css']
})
export class IngresoMotoComponent implements OnInit {

  public moto={
    placa:'', cilindraje:''
  }

  constructor(private _router: Router,
    private _service:MotoService)    
  {}

  ngOnInit() {

  }

  ingresoMoto(obj){
        this. _service.create(obj.moto).subscribe(res=>{
      this._router.navigate(['/listar/vehiculos']);
    });
  }
}