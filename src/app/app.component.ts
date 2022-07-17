import { Component } from '@angular/core';
import {ProductService} from "./services/product.service";
import {Observable} from "rxjs";
import {ProductCategory} from "./models/product-category";
import {Product} from "./models/product";
import {getData} from "country-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(getData())
  }
}
