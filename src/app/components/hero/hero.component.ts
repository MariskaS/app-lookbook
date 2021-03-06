import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../interfaces';
import {MODAL_CONTENT} from 'src/app/constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  modalContent = MODAL_CONTENT;

  public products: Product[];
  public isOpenIDsModal: boolean[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.get();
  }

  public openModal(index: number): void {
    this.isOpenIDsModal = this.products.map(product => false);
    this.isOpenIDsModal[index] = true;
  }

  public closeModal(index: number): void {
    this.isOpenIDsModal[index] = false;
  }

  public toggleDestination() {
    const element = document.querySelector("#goToSubscribe")
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
