import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { RouterLinkWithHref } from '@angular/router';
import { Docentes } from '../../../model/docentes';

@Component({
  selector: 'app-docente-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './docente-list.component.html',
  styleUrl: './docente-list.component.css'
})
export class DocentesListComponent {
  docentes: Docentes[] = []

  constructor(private docenteservice: GradoseccioncursoService){
    console.log("Reload data!");
  }

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.docenteservice.getDocentesList().subscribe(docentes => this.docentes = docentes);
  }

  eliminar(codigo: number){
    this.docenteservice.eliminarDocentes(codigo).subscribe(data => console.log(data));
    this.reloadData()
  }
}
