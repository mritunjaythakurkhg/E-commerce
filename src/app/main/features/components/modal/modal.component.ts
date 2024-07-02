import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/interfaces/items.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}

