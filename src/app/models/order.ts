import {Customer} from "./customer";
import {Address} from "./address";
import {OrderItem} from "./order-item";

export class Order{

  constructor(private totalPrice?:number,
              private totalQuantity?:number) {
}
}
