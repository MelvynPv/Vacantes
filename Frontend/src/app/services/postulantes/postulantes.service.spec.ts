import { TestBed } from '@angular/core/testing';

import { PostulantesService } from './postulantes.service';

describe('PostulantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostulantesService = TestBed.get(PostulantesService);
    expect(service).toBeTruthy();
  });
});
