import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkLostAndFoundComponent } from './hk-lost-and-found.component';

describe('HkLostAndFoundComponent', () => {
  let component: HkLostAndFoundComponent;
  let fixture: ComponentFixture<HkLostAndFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkLostAndFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkLostAndFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
