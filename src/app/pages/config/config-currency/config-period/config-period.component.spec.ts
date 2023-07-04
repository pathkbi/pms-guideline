import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPeriodComponent } from './config-period.component';

describe('ConfigPeriodComponent', () => {
  let component: ConfigPeriodComponent;
  let fixture: ComponentFixture<ConfigPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
