import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCurrencyComponent } from './config-currency.component';

describe('ConfigCurrencyComponent', () => {
  let component: ConfigCurrencyComponent;
  let fixture: ComponentFixture<ConfigCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
