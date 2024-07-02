import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Product } from 'src/app/shared/interfaces/items.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-your-product',
  templateUrl: './add-your-product.component.html',
  styleUrls: ['./add-your-product.component.scss'],
})
export class AddYourProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _products: ProductService, private router: Router) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      products: this.formBuilder.array([this.createProductGroup()]),
    });
  }

  createProductGroup(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['assets/watch 5.jpg'],
    });
  }

  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(this.createProductGroup());
  }

  onSubmit() {
    if (this.productForm.valid) {
      // const product: Add= this.productForm.value
      console.log(this.productForm.value);
      this.productForm.value.products.forEach((productDetails:any) => {
        this._products.addNewProduct(productDetails);
      });
      
      this.productForm.reset();
    } 
    else {
    }
  }
}
