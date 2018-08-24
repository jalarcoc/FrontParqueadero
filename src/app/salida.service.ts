import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError, map} from 'rxjs/operators';
import { Response } from "@angular/http"
import 'rxjs/add/observable/throw'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SalidaService {
  private _endPoint = "http://localhost:8090/parqueadero/cobro/vehiculo";
  constructor(private _http:  HttpClient) {}
  
  public all():Observable<any>{
    return this._http.get(this._endPoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  public salir(vehiculo):Observable<any>{
    return this._http.post(`${this._endPoint}`,vehiculo, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse | any){
    console.log("Error handled...");
    let errMsg: string;
    errMsg =error.error || '';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

