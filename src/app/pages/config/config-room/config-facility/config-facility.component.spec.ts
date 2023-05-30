import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFacilityComponent } from './config-facility.component';

describe('ConfigFacilityComponent', () => {
  let component: ConfigFacilityComponent;
  let fixture: ComponentFixture<ConfigFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
