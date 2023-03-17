import { TestBed } from '@angular/core/testing';

import { EditorComponentLibraryService } from './editor-component-library.service';

describe('EditorComponentLibraryService', () => {
  let service: EditorComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
