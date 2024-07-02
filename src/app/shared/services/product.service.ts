import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, of, switchMap } from 'rxjs';
import { Product } from '../interfaces/items.interface';
import { PRODUCT_LIST as PRODUCTS } from '../constants/product-list.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private router : Router) {}

  public searchSub$ = new BehaviorSubject<string>('');
  public productsAdded$ = new BehaviorSubject<any[]>([]);
  private _productList=[...PRODUCTS]

  public getProductList(query: string) {
    console.log(query, 'service');
    return new Observable<Product[]>((res) => {
      setTimeout(() => {
        if (!query.trim().length) {
          console.log(this._productList);
          res.next(this._productList);
        } else {
          res.next(this.filterProducts(query));
        }
        res.complete();
      }, 300);
    });
  }

  filterProducts(query: string): Product[] {
    return this._productList.filter((product) =>
      product.description.toLowerCase().includes(query)
    );
  }

  addNewProduct(newProduct: Product){

  this._productList.push(newProduct)
   console.log('added product',this._productList);
   this.router.navigate([''])

  }
}
