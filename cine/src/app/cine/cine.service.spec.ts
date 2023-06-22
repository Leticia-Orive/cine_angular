import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CineService } from './cine.service';

describe('CineService', () => {
  let service: CineService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CineService],
    });
    service = TestBed.inject(CineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve list of cines', () => {
    const mockCines = [
      {
        id: 1,
        nombre: 'Cine 1',
        cif: '12345rtd',
        direccion: 'c/angular 3',
        email: 'angular@gmail.com',
        provincia: 'Madrid',
        codigoPostal: '09876',
        telefono: '987654123',
      },
      {
        id: 2,
        nombre: 'Cine 2',
        cif: '12745rtd',
        direccion: 'c/angular 7',
        email: 'angular7@gmail.com',
        provincia: 'Madrid',
        codigoPostal: '09776',
        telefono: '9876544173',
      },
      // ...
    ];

    service.getCines().subscribe((cines) => {
      expect(cines).toEqual(mockCines);
    });

    const request = httpMock.expectOne('http://localhost:4200/cine');
    expect(request.request.method).toBe('GET');
    request.flush(mockCines);
  });

  // Agrega más casos de prueba para los demás métodos del servicio
});
