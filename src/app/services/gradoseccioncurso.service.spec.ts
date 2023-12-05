import { TestBed } from '@angular/core/testing';

import { GradoseccioncursoService } from './gradoseccioncurso.service';

describe('GradoseccioncursoService', () => {
  let service: GradoseccioncursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoseccioncursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
