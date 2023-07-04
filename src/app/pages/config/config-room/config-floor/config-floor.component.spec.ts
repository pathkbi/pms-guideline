import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFloorComponent } from './config-floor.component';

describe('ConfigFloorComponent', () => {
  let component: ConfigFloorComponent;
  let fixture: ComponentFixture<ConfigFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
