import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPricePolicyComponent } from './config-price-policy.component';

describe('ConfigPricePolicyComponent', () => {
  let component: ConfigPricePolicyComponent;
  let fixture: ComponentFixture<ConfigPricePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPricePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPricePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
