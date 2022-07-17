import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent {

  cartPrice: number = 0;
  productNumber: number = 0;

  constructor(private cartService:CartService,
              private router: Router) {
    cartService.cartPrice$.subscribe((cartPrice)=> {
      this.cartPrice = cartPrice;
    })
    cartService.productNumber$.subscribe((productNumber)=> {
      this.productNumber = productNumber;
    })
  }

  navigateToCart(){
    this.router.navigateByUrl('cart');
  }

}
