import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import 'rxjs/add/observable/throw'


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ListarVehiculosService {
  private _endPoint = "http://localhost:8090/parqueadero/listar/vehiculos";
  constructor(private _http: HttpClient) { }

  public all():Observable<any>{
    return this._http.get(this._endPoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse | any){
    let errMsg: string;
    if(error.error instanceof ErrorEvent){
      const body =error.json() || '';
      const err = body.error|| JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err} `;
    }else{
      errMsg =error.error.message ? error.error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

 