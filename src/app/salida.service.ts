import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class SalidaService {
  private _endPoint = "http://localhost:8080/parqueadero/cobro/vehiculo";
  constructor(private _http:  HttpClient) {}

  public all():Observable<[any]>{
    return this._http.get<[any]>(this._endPoint);
  }
  public salir(vehiculo):Observable<any>{
    return this._http.post(`${this._endPoint}`,vehiculo)
  }
}



