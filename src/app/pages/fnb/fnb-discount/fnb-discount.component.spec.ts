import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbDiscountComponent } from './fnb-discount.component';

describe('FnbDiscountComponent', () => {
  let component: FnbDiscountComponent;
  let fixture: ComponentFixture<FnbDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnbDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
