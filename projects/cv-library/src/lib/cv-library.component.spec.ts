import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLibraryComponent } from './cv-library.component';

describe('CvLibraryComponent', () => {
  let component: CvLibraryComponent;
  let fixture: ComponentFixture<CvLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
