import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { Gradoseccion } from '../../../model/gradoseccion';
import { Gradoseccioncurso } from '../../../model/gradoseccioncurso';

@Component({
  selector: 'app-gradoseccioncurso-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './gradoseccioncurso-list.component.html',
  styleUrl: './gradoseccioncurso-list.component.css'
})
export class GradoseccioncursoListComponent {
  gradoseccioncursos:Gradoseccioncurso[]=[]
  
  constructor(private gradoseccioncursoService: GradoseccioncursoService){}

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.gradoseccioncursoService.getGradosList().subscribe(gradoseccioncursos => this.gradoseccioncursos = gradoseccioncursos);
  }

  eliminar(codigo: number){
    //this.gradoseccioncursoService.eliminar(codigo).subscribe(data => console.log(data));
  }

}
