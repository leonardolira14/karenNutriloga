import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DatagenServiceService {
  Newpago$ = new EventEmitter<boolean>();
  public url_serve = environment.url_serve;
  constructor(
    private http: HttpClient
  ) { }


  enviarmensaje(datos) {
    return this.http.post(this.url_serve + 'enviar',  datos);
  }
}
