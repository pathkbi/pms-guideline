import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbUndoCheckComponent } from './fnb-undo-check.component';

describe('FnbUndoCheckComponent', () => {
  let component: FnbUndoCheckComponent;
  let fixture: ComponentFixture<FnbUndoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnbUndoCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbUndoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
