import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupReservationComponent } from './create-group-reservation.component';

describe('CreateGroupReservationComponent', () => {
  let component: CreateGroupReservationComponent;
  let fixture: ComponentFixture<CreateGroupReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
