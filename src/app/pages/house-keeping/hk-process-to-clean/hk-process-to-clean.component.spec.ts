import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkProcessToCleanComponent } from './hk-process-to-clean.component';

describe('HkProcessToCleanComponent', () => {
  let component: HkProcessToCleanComponent;
  let fixture: ComponentFixture<HkProcessToCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkProcessToCleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkProcessToCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
