import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Calificacion } from '../../../../../model/calificacion';
import { CalificacionService } from '../../../../../services/calificacion.service';

@Component({
  selector: 'app-calificaciones-registrar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calificaciones-registrar.component.html',
  styleUrl: './calificaciones-registrar.component.css'
})
export class CalificacionesRegistrarComponent implements OnInit {
  matriculaId: string;
  calificacion: Calificacion = new Calificacion();

  constructor(private calificacionService: CalificacionService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.matriculaId = String(params.get('matriculaId'))
    })
  }

  save(){
    console.log(this.calificacion);
    this.calificacionService.createCalificacion(this.matriculaId, this.calificacion).subscribe(
      data => this.router.navigate([`config/gradoseccioncurso/:gradoseccioncursoId/matriculas/${this.matriculaId}/calificaciones`])
    );
    console.log("continuando...");
  }
}
