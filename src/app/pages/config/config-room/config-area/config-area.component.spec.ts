import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAreaComponent } from './config-area.component';

describe('ConfigAreaComponent', () => {
  let component: ConfigAreaComponent;
  let fixture: ComponentFixture<ConfigAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
