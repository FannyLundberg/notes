import { TestBed } from '@angular/core/testing';

import { ChangeDocumentsService } from './change-documents.service';

describe('ChangeDocumentsService', () => {
  let service: ChangeDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
