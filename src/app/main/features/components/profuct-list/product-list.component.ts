import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/items.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListCompnent {
  durationInSeconds: number = 2;
  public shoppingCards?: Product[];
  public isLoading: boolean = false;
  public newData =   this._product.addNewProduct

  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    private _product: ProductService
  ) {
    this._product.searchSub$.subscribe({
      next: (result) => this.getProductList(result),
    });
  }

  getProductList(query: string) {
    this.isLoading = true;
    this._product
      .getProductList(query)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {      
          console.log('list comp' , res);
              
          (this.shoppingCards = res)
        }
      });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
