import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDiagramComponent } from './config-diagram.component';

describe('ConfigDiagramComponent', () => {
  let component: ConfigDiagramComponent;
  let fixture: ComponentFixture<ConfigDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
