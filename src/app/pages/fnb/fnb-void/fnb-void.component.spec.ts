import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbVoidComponent } from './fnb-void.component';

describe('FnbVoidComponent', () => {
  let component: FnbVoidComponent;
  let fixture: ComponentFixture<FnbVoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnbVoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
