import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Curso } from '../model/curso';
import { Grado } from '../model/grado';
import { Seccion } from '../model/seccion';
import { Gradoseccion } from '../model/gradoseccion';
import { Gradoseccioncurso } from '../model/gradoseccioncurso';

@Injectable({
  providedIn: 'root'
})
export class GradoseccioncursoService {
  URL_SERVICES = 'http://localhost:9092';
  private urlBase = this.URL_SERVICES + '/upc/api';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }); //definir a mano (1)

  constructor(private httpClient: HttpClient) { }
  
  //Listamos todos los cursos con su precio final calculado
  getCursosList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/cursos");
    return this.httpClient.get(this.urlBase + '/config/cursos').pipe(
      map(response => response as Curso[]) //(2)
    );
  }

  //Método para registrar cursos
  createCurso(curso: Object): Observable<Object> {
    return this.httpClient.post(this.urlBase + "/config/curso", curso, { headers: this.httpHeaders });
  }

  //Detalles de un curso
  public detailCurso(codigo: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.urlBase + "/config/curso/" + codigo);
  }

  //Eliminar un curso
  public eliminarCurso(codigo: number): Observable<Object> {
    return this.httpClient.get(this.urlBase + "/config/curso-del/" + codigo);
  }

  //Listamos todos los cursos con su precio final calculado
  getPCursoListByDescrip(filtro: string): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/cursosDescripcion/" + filtro);
    return this.httpClient.get(this.urlBase + '/config/cursosDescripcion' + filtro).pipe(
      map(response => response as Curso[]) //(2)
    );
  }
  

  //Listamos todos los grado con su precio final calculado
  getGradosList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/grados");
    return this.httpClient.get(this.urlBase + '/config/grados').pipe(
      map(response => response as Grado[]) //(2)
    );
  }

  //Método para registrar grados
  createGrado(grado: Object): Observable<Object> {
    return this.httpClient.post(this.urlBase + "/config/grado", grado, { headers: this.httpHeaders });
  }

  //Detalles de un grado
  public detailGrado(codigo: number): Observable<Grado> {
    return this.httpClient.get<Grado>(this.urlBase + "/config/grado/" + codigo);
  }

  //Eliminar un grado
  public eliminarGrado(codigo: number): Observable<Object> {
    return this.httpClient.get(this.urlBase + "/config/grado-del/" + codigo);
  }

  //Listamos todos los grados con su precio final calculado
  getGradoListByDescrip(filtro: string): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/gradosDescripcion/" + filtro);
    return this.httpClient.get(this.urlBase + '/config/gradosDescripcion' + filtro).pipe(
      map(response => response as Grado[]) //(2)
    );
  }
  

  //Listamos todos los cursos con su precio final calculado
  getSeccionList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/grados");
    return this.httpClient.get(this.urlBase + '/config/grados').pipe(
      map(response => response as Seccion[]) //(2)
    );
  }

  //Método para registrar seccions
  createSeccion(seccion: Object): Observable<Object> {
    return this.httpClient.post(this.urlBase + "/config/seccion", seccion, { headers: this.httpHeaders });
  }

  //Detalles de un producto
  public detailSeccion(codigo: number): Observable<Seccion> {
    return this.httpClient.get<Seccion>(this.urlBase + "/config/seccion/" + codigo);
  }

  //Eliminar un producto
  public eliminarSeccion(codigo: number): Observable<Object> {
    return this.httpClient.get(this.urlBase + "/config/seccion-del/" + codigo);
  }

  //Listamos todos los seccions con su precio final calculado
  getSeccionListByDescrip(filtro: string): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/seccionsDescripcion/" + filtro);
    return this.httpClient.get(this.urlBase + '/config/seccionsDescripcion' + filtro).pipe(
      map(response => response as Seccion[]) //(2)
    );
  }

  

  //Método para registrar Gradoseccions
  createGradoseccion(gradoseccion: Object): Observable<Object> {
    return this.httpClient.post(this.urlBase + "/config/gradosecciones", gradoseccion, { headers: this.httpHeaders });
  }

  //Detalles de un producto
  public detailGradoseccion(codigo: number): Observable<Gradoseccion> {
    return this.httpClient.get<Gradoseccion>(this.urlBase + "/config/gradoseccion/" + codigo);
  }

  //Eliminar un producto
  public eliminarGradoseccion(codigo: number): Observable<Object> {
    return this.httpClient.get(this.urlBase + "/config/gradoseccion-del/" + codigo);
  }

  //Listamos todos los gradoseccions con su precio final calculado
  getGradoseccionListByDescrip(filtro: string): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/gradoseccionsDescripcion/" + filtro);
    return this.httpClient.get(this.urlBase + '/config/gradoseccionsDescripcion' + filtro).pipe(
      map(response => response as Gradoseccion[]) //(2)
    );
  }
  
  

  //Método para registrar Gradoseccions
  createGradoseccioncurso(gradoseccion: Object): Observable<Object> {
    return this.httpClient.post(this.urlBase + "/config/gradoseccioncursos", gradoseccion, { headers: this.httpHeaders });
  }

  //Detalles de un producto
  public detailGradoseccioncurso(codigo: number): Observable<Gradoseccion> {
    return this.httpClient.get<Gradoseccion>(this.urlBase + "/config/gradoseccioncurso/" + codigo);
  }

  //Eliminar un producto
  public eliminarGradoseccioncurso(codigo: number): Observable<Object> {
    return this.httpClient.get(this.urlBase + "/config/gradoseccioncurso-del/" + codigo);
  }

  //Listamos todos los gradoseccions con su precio final calculado
  getGradoseccioncursoListByDescrip(filtro: string): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase + "/config/gradoseccioncursoDescripcion/" + filtro);
    return this.httpClient.get(this.urlBase + '/config/gradoseccioncursoDescripcion' + filtro).pipe(
      map(response => response as Gradoseccioncurso[]) //(2)
    );
  }

}
