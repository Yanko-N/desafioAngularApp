import { TestBed } from '@angular/core/testing';

import { PostFormularioService } from './post-formulario.service';

describe('PostFormularioService', () => {
  let service: PostFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
