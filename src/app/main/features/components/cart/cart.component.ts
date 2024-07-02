import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/shared/interfaces/items.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ModalComponent } from '../modal/modal.component';
import { finalize } from 'rxjs';

// interface ButtonState {
//   quantity: number;
// }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: Product[] = [];
  public isLoading: boolean = true;

  constructor(private cartService: CartService, private dialog: MatDialog) {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: Product) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: Product, index: number) {
    this.cartService.decreaseQuantity(item, index);
    if (item.quantity === 0) {
      this.deleteItem(item, index);
      item.quantity = 1;
    }
  }

  // deleteItem(item: Product, index: number) {
  //     const dialogRef = this.dialog.open(ModalComponent, {
  //       data: { itemname: item.description },
  //     });
  //     dialogRef.afterClosed().subscribe({
  //       next: (res) => {
  //         if (res) this.cartService.deleteItem(item, index);
  //         this.cartItems = this.cartService.getCartItems();
  //       },
  //     });
  // }

  deleteItem(item: Product, index: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { itemname: item.description },
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          item.loading = true;
          this.cartService
            .deleteItem(item, index)
            .pipe(finalize(() => (item.loading = false)))
            .subscribe({
              next: (res) => {
                this.cartItems = this.cartService.getCartItems();
              },
            });
        }
      },
    });
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }
}
