import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CheckoutService} from "../../services/checkout.service";
import {Address} from "../../models/address";
import {Customer} from "../../models/customer";
import {Order} from "../../models/order";
import {OrderItem} from "../../models/order-item";
import {Purchase} from "../../models/purchase";
import {CartItem, CartService} from "../../services/cart.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  myForm: FormGroup;

  cart: CartItem[] = []
  cartPrice: number = 0;

  constructor(private cartService: CartService,
              private http: HttpClient,
              private fb: FormBuilder,
              private checkoutService: CheckoutService) {
    this.cartService.cart$.subscribe((cartItems)=>{
      this.cart = cartItems;
    })
    cartService.cartPrice$.subscribe((cartPrice)=> {
      this.cartPrice = cartPrice;
    })

    this.myForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: [''],
      street:[''],
      phone:[''],
      city:[''],
      zipCode:[''],
      country:[''],
      nameOnCard:[''],
      cardNumber:[''],
      expMonth:[''],
      expYear:[''],
      securityCode:[''],
    })
  }

  onSubmit(){
    let address = new Address(this.myForm.get('street')?.value,this.myForm.get('city')?.value,this.myForm.get('country')?.value,this.myForm.get('zipCode')?.value);

    let customer = new Customer(this.myForm.get('fullName')?.value,this.myForm.get('phone')?.value,this.myForm.get('email')?.value);

    let order = new Order(this.cartPrice,this.cart.length);

    let orderItems : OrderItem[] = [];
    this.cart.forEach((cartItem) => {
      orderItems.push(new OrderItem(cartItem.product.imageUrl,cartItem.quantity,cartItem.product.unitPrice,cartItem.product.id));
    })

    let purchase = new Purchase(customer,address,address,order,orderItems);

    this.checkoutService.checkout(purchase);
  }

  get fullName(){
    return this.myForm.get('fullName')
  }
  get email(){
    return this.myForm.get('email')
  }
  get street(){
    return this.myForm.get('street')
  }
  get phone(){
    return this.myForm.get('phone')
  }
  get city(){
    return this.myForm.get('city')
  }get zipCode(){
    return this.myForm.get('zipCode')
  }
  get country(){
    return this.myForm.get('country')
  }
  get nameOnCard(){
    return this.myForm.get('nameOnCard')
  }
  get cardNumber(){
    return this.myForm.get('cardNumber')
  }
  get expMonth(){
    return this.myForm.get('expMonth')
  }
  get expYear(){
    return this.myForm.get('expYear')
  }
  get securityCode(){
    return this.myForm.get('securityCode')
  }

}
