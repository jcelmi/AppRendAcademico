import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Docentes } from '../../../model/docentes';
import { GradoseccioncursoService } from '../../../services/gradoseccioncurso.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-docentes-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './docentes-create.component.html',
  styleUrl: './docentes-create.component.css'
})
export class DocentesCreateComponent implements OnInit {

  docentes : Docentes = new Docentes();

  constructor(private DocentesService: GradoseccioncursoService, private router: Router){}

  ngOnInit(): void {

  }

  save(){
    console.log(this.docentes);
    this.DocentesService.createDocentes(this.docentes).subscribe(
      data => this.router.navigate(['/config/docentes/list']) // asincrona
    );
    console.log("continuando...");
  }

}
