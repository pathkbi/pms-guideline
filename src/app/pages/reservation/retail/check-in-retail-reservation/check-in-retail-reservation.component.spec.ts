import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInRetailReservationComponent } from './check-in-retail-reservation.component';

describe('CheckInRetailReservationComponent', () => {
  let component: CheckInRetailReservationComponent;
  let fixture: ComponentFixture<CheckInRetailReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInRetailReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInRetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
