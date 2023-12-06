import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { Grado } from '../../../model/grado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grado-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './grado-create.component.html',
  styleUrl: './grado-create.component.css'
})
export class GradoCreateComponent {
  constructor(private gradoService: GradoseccioncursoService, private router: Router){}

  grado: Grado = new Grado();

  //constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{}

  save(){
    this.gradoService.createCurso(this.grado).subscribe(
      data => this.router.navigate(['/config/curso/list'])
    );
  }


}
