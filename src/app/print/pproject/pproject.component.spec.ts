import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprojectComponent } from './pproject.component';

describe('PprojectComponent', () => {
  let component: PprojectComponent;
  let fixture: ComponentFixture<PprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
