import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IMachine, IMachineData, IMachineDetail, IMachineDetailData} from './machine';

@Injectable()
export class MachineService {
  private _machineHost = 'https://machinestream.herokuapp.com';
  private _machineUrl = this._machineHost + '/api/v1/machines';
  private _machineDetailUrl = this._machineHost + '/api/v1/machines/machine_id';

  constructor(private _http: HttpClient) { }

  getMachine(): Observable<IMachine[]> {
    return this._http.get<IMachineData>(this._machineUrl)
      .map((machineData: IMachineData) => machineData.data)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMachineDetail(id: string): Observable<IMachineDetail> {
    return this._http.get<IMachineDetailData>(this._machineDetailUrl.replace('machine_id', id))
      .map((machineDetailData: IMachineDetailData) => machineDetailData.data)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
