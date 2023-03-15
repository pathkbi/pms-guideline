import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkRoomStatusComponent } from './hk-room-status.component';

describe('HkRoomStatusComponent', () => {
  let component: HkRoomStatusComponent;
  let fixture: ComponentFixture<HkRoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkRoomStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkRoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
