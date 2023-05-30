import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRoomTypeComponent } from './config-room-type.component';

describe('ConfigRoomTypeComponent', () => {
  let component: ConfigRoomTypeComponent;
  let fixture: ComponentFixture<ConfigRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigRoomTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
