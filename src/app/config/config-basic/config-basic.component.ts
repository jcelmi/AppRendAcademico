import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradoListComponent } from '../grado/grado-list/grado-list.component';
import { CursoListComponent } from '../curso/curso-list/curso-list.component';
import { SeccionListComponent } from '../seccion/seccion-list/seccion-list.component';
import { GradoseccionListComponent } from '../gradoseccion/gradoseccion-list/gradoseccion-list.component';
import { GradoseccioncursoListComponent } from '../gradoseccioncurso/gradoseccioncurso-list/gradoseccioncurso-list.component';
import { EstudianteListComponent } from '../estudiantes/estudiante-list/estudiante-list.component';
import { DocentesListComponent } from '../docentes/docentes-list/docente-list.component';

@Component({
  selector: 'app-config-basic',
  standalone: true,
  imports: [CommonModule, CursoListComponent, SeccionListComponent, GradoListComponent, GradoseccionListComponent, GradoseccioncursoListComponent, EstudianteListComponent, DocentesListComponent],
  templateUrl: './config-basic.component.html',
  styleUrl: './config-basic.component.css'
})
export class ConfigBasicComponent {

}
