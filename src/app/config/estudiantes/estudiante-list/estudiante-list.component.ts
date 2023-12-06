import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { RouterLinkWithHref } from '@angular/router';
import { Estudiante } from '../../../model/estudiante';

@Component({
  selector: 'app-estudiantes-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './estudiante-list.component.html',
  styleUrl: './estudiante-list.component.css'
})
export class EstudianteListComponent {
  estudiantes: Estudiante[] = []

  constructor(private estudianteservice: GradoseccioncursoService){
    console.log("Reload data!");
  }

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.estudianteservice.getEstudiantesList().subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  eliminar(codigo: number){
    //this.gradoervice.eliminar(codigo).subscribe(data => console.log(data));
  }
}
