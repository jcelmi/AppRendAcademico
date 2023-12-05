import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../../../model/curso';
import { Grado } from '../../../model/grado';
import { Seccion } from '../../../model/seccion';
import { Gradoseccion } from '../../../model/gradoseccion';
import { Gradoseccioncurso } from '../../../model/gradoseccioncurso';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref], 
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.css'
})
export class CursoListComponent {
  cursos : Curso[]= []
  //cursoService: GradoseccioncursoService = inject(GradoseccioncursoService);

  constructor(private cursoService: GradoseccioncursoService){
    console.log("Reload data!");
    //this.cursoService.getCursosList().subscribe(cursos => this.cursos = cursos);
  }//Inyectando el servicio
    

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.cursoService.getCursosList().subscribe(cursos => this.cursos = cursos);
  }

  eliminar(codigo: number){
    //this.productService.eliminar(codigo).subscribe(data => console.log(data));
  }

}
