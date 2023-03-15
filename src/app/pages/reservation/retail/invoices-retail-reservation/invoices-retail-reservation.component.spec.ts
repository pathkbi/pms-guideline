import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesRetailReservationComponent } from './invoices-retail-reservation.component';

describe('InvoicesRetailReservationComponent', () => {
  let component: InvoicesRetailReservationComponent;
  let fixture: ComponentFixture<InvoicesRetailReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesRetailReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesRetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
