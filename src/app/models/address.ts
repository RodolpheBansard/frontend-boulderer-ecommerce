import {AbstractControl} from "@angular/forms";

export class Address{
  constructor(private street?: AbstractControl | null, private city?: AbstractControl | null, private country?: AbstractControl | null, private zipCode?: AbstractControl | null) {
  }
}
