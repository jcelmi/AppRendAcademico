import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { Router } from '@angular/router';
import { Seccion } from '../../../model/seccion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seccion-create.component.html',
  styleUrl: './seccion-create.component.css'
})
export class SeccionCreateComponent {
  constructor(private seccionService: GradoseccioncursoService, private router: Router){}

  seccion: Seccion = new Seccion();

  //constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{}

  save(){
    this.seccionService.createSeccion(this.seccion).subscribe(
      data => this.router.navigate(['/config/seccion/list'])
    );
  }


}
