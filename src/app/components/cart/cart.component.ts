import { Component, OnInit } from '@angular/core';
import {CartItem, CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: CartItem[] = [];
  cartPrice: number = 0;
  constructor(private cartService : CartService,
              private router: Router) {
    this.cartService.cart$.subscribe((cartItems)=>{
      this.cart = cartItems;
    })
    cartService.cartPrice$.subscribe((cartPrice)=> {
      this.cartPrice = cartPrice;
    })
  }

  ngOnInit(): void {
  }

  deleteItemFromCart(index: number){
    this.cartService.deleteItemFromCart(index);
  }

  goToCheckoutPage(){
    this.router.navigateByUrl('checkout')
  }
}
