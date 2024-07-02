import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourProductComponent } from './add-your-product.component';

describe('AddYourProductComponent', () => {
  let component: AddYourProductComponent;
  let fixture: ComponentFixture<AddYourProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddYourProductComponent]
    });
    fixture = TestBed.createComponent(AddYourProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
