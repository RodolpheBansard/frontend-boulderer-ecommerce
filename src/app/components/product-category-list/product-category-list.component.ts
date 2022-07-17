import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../models/product-category";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent {
  categories : ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProductCategory().subscribe((categories) => {
      this.categories = categories;
    })
  }

}
