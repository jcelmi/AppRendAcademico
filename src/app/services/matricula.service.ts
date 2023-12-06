import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  URL_SERVICES = 'http://localhost:9092';
  private urlBase = this.URL_SERVICES + '/upc/api';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }); //definir a mano (1)

  constructor(private httpClient: HttpClient) { }

  getMatriculasList(gradoseccioncursoId: string): Observable<any> {
    console.log("Llamando a REST: " + `${this.urlBase}/config/gradoseccioncurso/${gradoseccioncursoId}/matriculas`);
    return this.httpClient.get(`${this.urlBase}/config/gradoseccioncurso/${gradoseccioncursoId}/matriculas`, {
      headers: this.httpHeaders
    })
      .pipe(
        map(response => response as Matricula[])
      );
  }
}
