import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Matricula } from '../../../model/matricula';
import { MatriculaService } from '../../../services/matricula.service';
import { ActivatedRoute, ParamMap, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
  matriculas: Matricula[] = []
  id: string

  constructor(private matriculaService: MatriculaService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = String(params.get('id'))
    })
    this.reloadData()
  }

  reloadData(){
    console.log("Reload data!");
    this.matriculaService.getMatriculasList(this.id).subscribe(matriculas => this.matriculas = matriculas);
  }
}
