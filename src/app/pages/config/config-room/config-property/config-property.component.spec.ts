import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPropertyComponent } from './config-property.component';

describe('ConfigPropertyComponent', () => {
  let component: ConfigPropertyComponent;
  let fixture: ComponentFixture<ConfigPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
