import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawardComponent } from './paward.component';

describe('PawardComponent', () => {
  let component: PawardComponent;
  let fixture: ComponentFixture<PawardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
