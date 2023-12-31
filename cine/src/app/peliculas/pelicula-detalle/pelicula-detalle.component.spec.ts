import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetalleComponent } from './pelicula-detalle.component';

describe('PeliculaDetalleComponent', () => {
  let component: PeliculaDetalleComponent;
  let fixture: ComponentFixture<PeliculaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaDetalleComponent]
    });
    fixture = TestBed.createComponent(PeliculaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
