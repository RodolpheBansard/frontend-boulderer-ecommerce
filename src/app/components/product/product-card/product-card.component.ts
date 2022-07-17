import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!:Product;

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  onProduct(){
    this.router.navigateByUrl('product/'+this.product.id);
  }

  addProductToCart(product: Product){
    this.cartService.addProduct(product);
  }

}
