import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import {Headers,Http,Response} from '@angular/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable()
export class CarroService {
  private _endPoint = "http://localhost:8080/parqueadero//ingreso/carro";
  constructor(private _http:  HttpClient) {}

  public all():Observable<[any]>{
    return this._http.get<[any]>(this._endPoint);
  }

  public create(carro):Observable<any>{
    return this._http.post(`${this._endPoint}`,carro)
  }
}
