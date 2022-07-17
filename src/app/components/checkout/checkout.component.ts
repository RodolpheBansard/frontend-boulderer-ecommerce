import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['',Validators.required],
      address:['', Validators.required],
      phone:['', Validators.required],
      city:['', Validators.required],
      zipCode:['', Validators.required],
      country:['', Validators.required],
      nameOnCard:['',Validators.required],
      cardNumber:['',Validators.required],
      expMonth:['',Validators.required],
      expYear:['',Validators.required],
      securityCode:['',Validators.required],
    })
  }

  onSubmit(){
    console.log(this.myForm.value)
    console.log(this.myForm.valid)
  }

  get fullName(){
    return this.myForm.get('fullName')
  }
  get email(){
    return this.myForm.get('email')
  }
  get address(){
    return this.myForm.get('address')
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
