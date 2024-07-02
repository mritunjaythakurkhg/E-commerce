import { FormArray, FormControl } from "@angular/forms";

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  quantity:number;
  total_product_price?:number;
  loading?:boolean;
}

// export interface Add {
//   title: FormControl<string | null>;
//   price: FormControl<number | null>;
//   description: FormControl<string | null>;
//   imageUrl: FormControl<string | null>;
//   quantiy:FormControl<number|null>;
// }


