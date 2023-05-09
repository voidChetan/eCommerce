import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleComponent } from './sale.component';

describe('SaleComponent', () => {
  let component: SaleComponent;
  let fixture: ComponentFixture<SaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
