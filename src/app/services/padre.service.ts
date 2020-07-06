import { Injectable } from '@angular/core';
import {Padre} from '../models/padre';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadreService {
  urlEndPoint = 'http://localhost:8080/api/padre';
  headers: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(private httpClient: HttpClient) { }

  getPadres(): Observable<Padre[]>{
    return this.httpClient.get<Padre[]>(this.urlEndPoint);
  }
  savePadres(padre: Padre): Observable<Padre>{
    return this.httpClient.post<Padre>(this.urlEndPoint, padre, {headers: this.headers});
  }
  getPadreById(id: number): Observable<Padre>{
    return this.httpClient.get<Padre>(`${this.urlEndPoint}/${id}`);
  }
  updatePadre(padre: Padre): Observable<Padre>{
    return this.httpClient.put<Padre>(`${this.urlEndPoint}/${padre.id}`, padre, {headers: this.headers});
  }
  deletePadre(id: number): Observable<Padre>{
    return this.httpClient.delete<Padre>(`${this.urlEndPoint}/${id}`, {headers: this.headers});
  }
}
