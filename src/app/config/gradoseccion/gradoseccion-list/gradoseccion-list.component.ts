import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gradoseccion } from '../../../model/gradoseccion';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-gradoseccion-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './gradoseccion-list.component.html',
  styleUrl: './gradoseccion-list.component.css'
})
export class GradoseccionListComponent {
  gradosecciones: Gradoseccion[]=[]

  constructor(private gradoseccionService: GradoseccioncursoService){}

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.gradoseccionService.getGradoSeccionList().subscribe(gradosecciones => this.gradosecciones = gradosecciones);
  }

  eliminar(codigo: number){
    //this.gradoseccionService.eliminar(codigo).subscribe(data => console.log(data));
  }

}
