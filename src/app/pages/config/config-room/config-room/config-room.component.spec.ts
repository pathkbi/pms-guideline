import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRoomComponent } from './config-room.component';

describe('ConfigRoomComponent', () => {
  let component: ConfigRoomComponent;
  let fixture: ComponentFixture<ConfigRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
