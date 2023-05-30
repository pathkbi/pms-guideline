import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPaymentComponent } from './config-payment.component';

describe('ConfigPaymentComponent', () => {
  let component: ConfigPaymentComponent;
  let fixture: ComponentFixture<ConfigPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
