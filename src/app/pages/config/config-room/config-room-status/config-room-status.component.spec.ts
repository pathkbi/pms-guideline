import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRoomStatusComponent } from './config-room-status.component';

describe('ConfigRoomStatusComponent', () => {
  let component: ConfigRoomStatusComponent;
  let fixture: ComponentFixture<ConfigRoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigRoomStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
