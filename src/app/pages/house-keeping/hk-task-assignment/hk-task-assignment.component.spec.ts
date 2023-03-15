import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkTaskAssignmentComponent } from './hk-task-assignment.component';

describe('HkTaskAssignmentComponent', () => {
  let component: HkTaskAssignmentComponent;
  let fixture: ComponentFixture<HkTaskAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkTaskAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkTaskAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
