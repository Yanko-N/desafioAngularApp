import { TestBed } from '@angular/core/testing';

import { GetFilmesService } from './get-filmes.service';

describe('GetFilmesService', () => {
  let service: GetFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
