import {Injectable} from '@angular/core';
import {Product} from "../interfaces";
import {products} from "../mockData";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = products;

  get(): Product[] | [] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find(item => item.id === id);
  }
}
