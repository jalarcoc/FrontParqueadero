import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { Response} from "@angular/http"
import { catchError, map} from 'rxjs/operators'; 
import 'rxjs/add/observable/throw'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class MotoService {
  private _endPoint = "http://localhost:8090/parqueadero//ingreso/moto";
  constructor(private _http:  HttpClient) {}

  public all():Observable<any>{
    return this._http.get(this._endPoint)
    .pipe(

      catchError(this.handleError)
    );
  }

  public create(moto):Observable<any>{
    const headers = new Headers({'Content-type':'application/json'});
    return this._http.post(`${this._endPoint}`,moto, httpOptions)
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
