import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Calificacion } from '../model/calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  URL_SERVICES = 'http://localhost:9092';
  private urlBase = this.URL_SERVICES + '/upc/api';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }); //definir a mano (1)

  constructor(private httpClient: HttpClient) { }

  getMatriculaNotasList(matriculaId: string): Observable<any> {
    console.log("Llamando a REST: " + `${this.urlBase}/config/matriculas/${matriculaId}/calificaciones`);
    return this.httpClient.get(`${this.urlBase}/config/matriculas/${matriculaId}/calificaciones`, {
      headers: this.httpHeaders
    })
      .pipe(
        map(response => response as Calificacion[])
      );
  }
}
