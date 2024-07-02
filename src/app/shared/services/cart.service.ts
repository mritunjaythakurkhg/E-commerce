import { Injectable, IterableDiffers } from '@angular/core';
import { Product } from '../interfaces/items.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/main/features/components/snack-bar/snack-bar.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _snackBar: MatSnackBar) {}
  durationInSeconds = 2;
  public cartItems: Product[] = [];

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingItem) {
      product.quantity++;

      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
      });
    } else {
      this.cartItems.push(product);
      product.quantity++;
    }
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  increaseQuantity(item: Product) {
    item.quantity++;
  }

  decreaseQuantity(item: Product, index: number) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
  deleteItem(item: Product, index: number) {
    return new Observable((result)=>{
      setTimeout(()=>{
        item.quantity = 0;
        this.cartItems = this.cartItems.filter((el) => el.id !== item.id);
        result.next(false);
        result.complete();
      },1000)
    })

    
  }
}
