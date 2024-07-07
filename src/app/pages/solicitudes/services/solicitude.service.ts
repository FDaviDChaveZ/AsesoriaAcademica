import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { endpoint } from 'src/app/Shared/apis/endpoint';
import { Observable, map } from 'rxjs';
import { BaseResponse } from 'src/app/Shared/models/base-api-response.interface';
import { SolicitudeResponse } from '../models/solicitude-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudeService {

  constructor(private _http:HttpClient) { }

  getSolicitude(teacherId:any) : Observable<BaseResponse>{
    const requestUrl = `${env.api}${endpoint.LIST_SOLICITUDE}?teacherId=${teacherId}`;
    return this._http.get(requestUrl).pipe(map((resp:BaseResponse)=>{
      return resp;
    }));
  }
}
