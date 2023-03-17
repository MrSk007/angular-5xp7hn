import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponentLibraryComponent } from './editor-component-library.component';

describe('EditorComponentLibraryComponent', () => {
  let component: EditorComponentLibraryComponent;
  let fixture: ComponentFixture<EditorComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorComponentLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
