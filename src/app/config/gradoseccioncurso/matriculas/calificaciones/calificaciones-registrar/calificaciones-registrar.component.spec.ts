import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificacionesRegistrarComponent } from './calificaciones-registrar.component';

describe('CalificacionesRegistrarComponent', () => {
  let component: CalificacionesRegistrarComponent;
  let fixture: ComponentFixture<CalificacionesRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionesRegistrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificacionesRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
