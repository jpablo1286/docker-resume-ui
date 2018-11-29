import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PexpirienceComponent } from './pexpirience.component';

describe('PexpirienceComponent', () => {
  let component: PexpirienceComponent;
  let fixture: ComponentFixture<PexpirienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PexpirienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PexpirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
