import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceProductCardComponent } from './ecommerce-product-card.component';

describe('EcommerceProductCardComponent', () => {
  let component: EcommerceProductCardComponent;
  let fixture: ComponentFixture<EcommerceProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommerceProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
