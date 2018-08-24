import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }from '@angular/common/http';
import {Response} from '@angular/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/throw'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CarroService {
  private _endPoint = "http://localhost:8090/parqueadero//ingreso/carro";
  constructor(private _http:  HttpClient) {}

  public all():Observable<any>{
    return this._http.get(this._endPoint)
    .pipe(

      catchError(this.handleError)
    );
  }

  public create(carro):Observable<any>{
    return this._http.post(`${this._endPoint}`,carro, httpOptions)
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


