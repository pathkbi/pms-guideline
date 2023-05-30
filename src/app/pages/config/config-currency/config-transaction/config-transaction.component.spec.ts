import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTransactionComponent } from './config-transaction.component';

describe('ConfigTransactionComponent', () => {
  let component: ConfigTransactionComponent;
  let fixture: ComponentFixture<ConfigTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
