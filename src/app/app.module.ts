import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/features/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

import { MatCardModule } from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSelectModule } from '@angular/material/select';
import { CartComponent } from './main/features/components/cart/cart.component';
import { ProductListCompnent } from './main/features/components/profuct-list/product-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './main/features/components/modal/modal.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddYourProductComponent } from './main/features/components/add-your-product/add-your-product.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductListCompnent, CartComponent, ModalComponent, AddYourProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
