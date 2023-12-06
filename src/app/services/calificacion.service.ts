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

  //Método para registrar estudiantes
  createCalificacion(matriculaId: string, calificacion: Object): Observable<Object> {
    return this.httpClient.post(
      this.urlBase + `/config/matriculas/${matriculaId}/calificaciones`,
      calificacion,
      { headers: this.httpHeaders }
    );
  }

  public detailNota(codigo: string): Observable<Calificacion> {
    return this.httpClient.get<Calificacion>(this.urlBase + "/config/matriculas/calificaciones/" + codigo);
  }

  public eliminarNota(codigo: string): Observable<Object> {
    return this.httpClient.delete(this.urlBase + "/config/matriculas/calificaciones-del/" + codigo);
  }

  updateCalificacion(calificacionId: string, calificacion: Object): Observable<Object> {
    return this.httpClient.post(
      this.urlBase + `/config/matriculas/${calificacionId}/calificaciones/actualizar`,
      calificacion,
      { headers: this.httpHeaders }
    );
  }
}
