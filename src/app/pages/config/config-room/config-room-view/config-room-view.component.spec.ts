import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRoomViewComponent } from './config-room-view.component';

describe('ConfigRoomViewComponent', () => {
  let component: ConfigRoomViewComponent;
  let fixture: ComponentFixture<ConfigRoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigRoomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
