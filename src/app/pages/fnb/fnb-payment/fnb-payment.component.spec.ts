import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbPaymentComponent } from './fnb-payment.component';

describe('FnbPaymentComponent', () => {
  let component: FnbPaymentComponent;
  let fixture: ComponentFixture<FnbPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnbPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
