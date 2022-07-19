import {AbstractControl} from "@angular/forms";

export class Customer{
  constructor(private fullName?: AbstractControl | null, private phone?: AbstractControl | null, private email?: AbstractControl | null) {
  }
}
