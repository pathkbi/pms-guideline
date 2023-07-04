import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListQuestionsComponent } from './dashboard-list-questions.component';

describe('DashboardListQuestionsComponent', () => {
  let component: DashboardListQuestionsComponent;
  let fixture: ComponentFixture<DashboardListQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
