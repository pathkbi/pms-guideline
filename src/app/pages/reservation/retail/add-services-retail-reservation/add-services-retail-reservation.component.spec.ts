import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesRetailReservationComponent } from './add-services-retail-reservation.component';

describe('AddServicesRetailReservationComponent', () => {
  let component: AddServicesRetailReservationComponent;
  let fixture: ComponentFixture<AddServicesRetailReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServicesRetailReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesRetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
