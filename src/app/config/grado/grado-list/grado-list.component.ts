import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grado } from '../../../model/grado';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-grado-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './grado-list.component.html',
  styleUrl: './grado-list.component.css'
})
export class GradoListComponent {
  grados: Grado[] = []

  constructor(private gradoervice: GradoseccioncursoService){
    console.log("Reload data!");
  }

  ngOnInit(): void{
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.gradoervice.getGradosList().subscribe(grados => this.grados = grados);
  }

  eliminar(codigo: number){
    //this.gradoervice.eliminar(codigo).subscribe(data => console.log(data));
  }
}
