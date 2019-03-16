import { TestBed } from '@angular/core/testing';

import { MuseumpasService } from './museumpas.service';

describe('MuseumpasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuseumpasService = TestBed.get(MuseumpasService);
    expect(service).toBeTruthy();
  });
});
