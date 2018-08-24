import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Http } from '../../node_modules/@angular/http';
import { Observable } from '../../node_modules/rxjs';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ListarVehiculosService {
  private _endPoint = "http://localhost:8080/parqueadero/listar/vehiculos";
  constructor(private _http: HttpClient) { }

  public all():Observable<[any]>{
    return this._http.get<[any]>(this._endPoint);
  }
  private extractData(res:Response){
    return res.json()||{};
  }
  
}
 