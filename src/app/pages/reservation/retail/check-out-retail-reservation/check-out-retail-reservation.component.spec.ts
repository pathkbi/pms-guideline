import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutRetailReservationComponent } from './check-out-retail-reservation.component';

describe('CheckOutRetailReservationComponent', () => {
  let component: CheckOutRetailReservationComponent;
  let fixture: ComponentFixture<CheckOutRetailReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutRetailReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutRetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
