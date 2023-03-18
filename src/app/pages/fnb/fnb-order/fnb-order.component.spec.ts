import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbOrderComponent } from './fnb-order.component';

describe('FnbOrderComponent', () => {
  let component: FnbOrderComponent;
  let fixture: ComponentFixture<FnbOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnbOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
