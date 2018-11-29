import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdegreeComponent } from './pdegree.component';

describe('PdegreeComponent', () => {
  let component: PdegreeComponent;
  let fixture: ComponentFixture<PdegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
