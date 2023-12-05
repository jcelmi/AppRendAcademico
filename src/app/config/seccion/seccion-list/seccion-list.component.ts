import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seccion } from '../../../model/seccion';
import { RouterLinkWithHref } from '@angular/router';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';

@Component({
  selector: 'app-seccion-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './seccion-list.component.html',
  styleUrl: './seccion-list.component.css'
})
export class SeccionListComponent {
  secciones: Seccion[] = []

  constructor(private seccionService: GradoseccioncursoService){}

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.seccionService.getGradosList().subscribe(secciones => this.secciones = secciones);
  }

  eliminar(codigo: number){
    //this.seccionService.eliminar(codigo).subscribe(data => console.log(data));
  }

}
