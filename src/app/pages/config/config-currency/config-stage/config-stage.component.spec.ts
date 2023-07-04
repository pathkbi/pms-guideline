import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigStageComponent } from './config-stage.component';

describe('ConfigStageComponent', () => {
  let component: ConfigStageComponent;
  let fixture: ComponentFixture<ConfigStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
