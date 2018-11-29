import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcertificateComponent } from './pcertificate.component';

describe('PcertificateComponent', () => {
  let component: PcertificateComponent;
  let fixture: ComponentFixture<PcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
