import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable()
export class MotoService {
  private _endPoint = "http://localhost:8080/parqueadero//ingreso/moto";
  constructor(private _http:  HttpClient) {}

  public all():Observable<[any]>{
    return this._http.get<[any]>(this._endPoint);
  }

  public create(moto):Observable<any>{
    return this._http.post(`${this._endPoint}`,moto)
  }
}
