import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLinkWithHref } from '@angular/router';
import { Calificacion } from '../../../../../model/calificacion';
import { CalificacionService } from '../../../../../services/calificacion.service';

@Component({
  selector: 'app-calificaciones',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './calificaciones-list.component.html',
  styleUrl: './calificaciones-list.component.css'
})
export class CalificacionesComponent {
  calificaciones: Calificacion[] = []
  gradoseccioncursoId: string;
  matriculaId: string;

  constructor(private calificacionService: CalificacionService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gradoseccioncursoId = String(params.get('gradoseccioncursoId'))
      this.matriculaId = String(params.get('matriculaId'))
    })
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.calificacionService.getMatriculaNotasList(this.matriculaId).subscribe(calificaciones => this.calificaciones = calificaciones);
  }

  eliminar(codigo: number){
    this.calificacionService.eliminarNota(String(codigo)).subscribe(data => console.log(data));
    this.reloadData()
  }
}
