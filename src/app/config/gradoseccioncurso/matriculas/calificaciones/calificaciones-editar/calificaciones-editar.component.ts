import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Calificacion } from '../../../../../model/calificacion';
import { CalificacionService } from '../../../../../services/calificacion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calificaciones-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calificaciones-editar.component.html',
  styleUrl: './calificaciones-editar.component.css'
})
export class CalificacionesEditarComponent {
  calificacionId: string;
  matriculaId: string;
  gradoSeccionCursoId: string;
  calificacion: Calificacion = new Calificacion();

  constructor(
    private calificacionService: CalificacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.calificacionId = String(params.get('calificacionId'))
      this.matriculaId = String(params.get('matriculaId'))
      this.gradoSeccionCursoId = String(params.get('gradoSeccionCursoId'))
    })
    this.loadEditableData()
  }

  loadEditableData(){
    this.calificacionService.detailNota(this.calificacionId).subscribe(calificacion => this.calificacion = calificacion);
  }

  save(){
    console.log(this.calificacion);
    this.calificacionService.updateCalificacion(this.calificacionId, this.calificacion).subscribe(
      data => this.router.navigate([`/config/gradoseccioncurso/${this.gradoSeccionCursoId}/matriculas/${this.matriculaId}/calificaciones`])
    );
    console.log("continuando...");
  }
}
