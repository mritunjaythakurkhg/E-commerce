import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/items.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  countItems: number = 0;
  searchText?: string = '';
  public cartItem: Product[] = [];
  filteredItems: Product[] = [];
  searchForm!: FormGroup;
  constructor(
    private router: Router,
    private cart: CartService,
    private _product: ProductService
  ) { }

  onchange(event: string) {
    this._product.searchSub$.next(event);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  getCartItemCount() {
    return this.cart.cartItems.length;
  }
  goAddProduct()
  {
    this.router.navigate(['add-your-product']);
  }

}
