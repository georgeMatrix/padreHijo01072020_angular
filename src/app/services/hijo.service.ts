import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hijo} from '../models/hijo';

@Injectable({
  providedIn: 'root'
})
export class HijoService {
  urlEndPoint = 'http://localhost:8080/api/hijo';
  headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private httpClient: HttpClient) { }
  getHijos(): Observable<Hijo[]>{
    return this.httpClient.get<Hijo[]>(this.urlEndPoint);
  }
  saveHijos(hijo: Hijo): Observable<Hijo>{
    return this.httpClient.post<Hijo>(this.urlEndPoint, hijo, {headers: this.headers});
  }
  getHijo(id: number): Observable<Hijo>{
    return this.httpClient.get<Hijo>(`${this.urlEndPoint}/${id}`);
  }
  updateHijo(hijo: Hijo): Observable<Hijo>{
    return this.httpClient.put<Hijo>(`${this.urlEndPoint}/${hijo.id}`, hijo, {headers: this.headers});
  }
}
