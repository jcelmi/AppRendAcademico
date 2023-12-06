import { Routes } from '@angular/router';
import { GradoListComponent } from './config/grado/grado-list/grado-list.component';
import { SeccionListComponent } from './config/seccion/seccion-list/seccion-list.component';
import { CursoListComponent } from './config/curso/curso-list/curso-list.component';
import { GradoseccionListComponent } from './config/gradoseccion/gradoseccion-list/gradoseccion-list.component';
import { ConfigBasicComponent } from './config/config-basic/config-basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GradoseccioncursoListComponent } from './config/gradoseccioncurso/gradoseccioncurso-list/gradoseccioncurso-list.component';
import { GradoCreateComponent } from './config/grado/grado-create/grado-create.component';
import { SeccionCreateComponent } from './config/seccion/seccion-create/seccion-create.component';
import { CursoCreateComponent } from './config/curso/curso-create/curso-create.component';

import { GradoseccionCreateComponent } from './config/gradoseccion/gradoseccion-create/gradoseccion-create.component';
import { GradoseccioncursoCreateComponent } from './config/gradoseccioncurso/gradoseccioncurso-create/gradoseccioncurso-create.component';
import { EstudianteListComponent } from './config/estudiantes/estudiante-list/estudiante-list.component';
import { EstudianteCreateComponent } from './config/estudiantes/estudiante-create/estudiante-create.component';
import { DocentesListComponent } from './config/docentes/docentes-list/docente-list.component';
import { DocentesCreateComponent } from './config/docentes/docentes-create/docentes-create.component';

export const routes: Routes = [
    {path: "config/grado/list", component: GradoListComponent},
    {path: "config/grado/crear", component: GradoCreateComponent},
    {path: "config/seccion/list", component: SeccionListComponent},
    {path: "config/seccion/crear", component: SeccionCreateComponent},
    {path: "config/curso/list", component: CursoListComponent},
    {path: "config/curso/crear", component: CursoCreateComponent},
    {path: "config/estudiantes/list", component: EstudianteListComponent},
    {path: "config/estudiantes/crear", component: EstudianteCreateComponent},
    {path: "config/docentes/list", component: DocentesListComponent},
    {path: "config/docentes/crear", component: DocentesCreateComponent},
    {path: "config/gradoseccion/list", component: GradoseccionListComponent},
    {path: "config/gradoseccion/crear", component: GradoseccionCreateComponent},
    {path: "config/gradoseccioncurso/list", component: GradoseccioncursoListComponent},
    {path: "config/gradoseccioncurso/crear", component: GradoseccioncursoCreateComponent},
    {path: "config", component: ConfigBasicComponent},
    {path: '', redirectTo: '/config', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent}
];

