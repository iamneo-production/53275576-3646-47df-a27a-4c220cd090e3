import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {PaymentPayload} from './payment.payload';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  detailsform: FormGroup;
  paymentpayload:PaymentPayload;
  
  constructor(private formBuilder : FormBuilder , private router: Router) { 
    this.paymentpayload={
      name:'',
      email:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
      card:'',
      cvvnum:'', 
      expirymonth:'',
      expiryyear:'', 
      mobilenumber:'',  
      amount:'',
    } 
  }

  ngOnInit(): void {
    
    this.detailsform = new FormGroup({
      name : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^([A-Za-z0-9_-]+.*?){3,18}$')]),
      email : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      address : new FormControl('', [Validators.required,Validators.minLength(6),Validators.pattern('^([A-Za-z0-9_-]+.*?){8,60}$')]),
      city : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9_-]{3,20}$')]),
      zipcode : new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]{5,15}$')]),
      card : new FormControl('', [Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]{10,16}$')]),
      expirymonth : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]{1,2}$')]),
      expiryyear : new FormControl('', [Validators.required,Validators.minLength(4),Validators.pattern('^[0-9]{4}$')]),
      cvvnum : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z0-9]{3}$')]),
      mobilenumber : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[a-zA-Z0-9]{10}$')]),
      amount : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]{1,10}$')]),
      
      
    });
  }
  success(){
    window.alert("Payment Success");
  }
  onSubmit(e){
    this.paymentpayload.name = this.detailsform.get('name').value;
    this.paymentpayload.email = this.detailsform.get('email').value;
    this.paymentpayload.address = this.detailsform.get('address').value;
    this.paymentpayload.city = this.detailsform.get('city').value;
    this.paymentpayload.mobilenumber = this.detailsform.get('mobilenumber').value;
    this.paymentpayload.zipcode = this.detailsform.get('zipcode').value;
    this.paymentpayload.cvvnum = this.detailsform.get('cvvnum').value;
    this.paymentpayload.card = this.detailsform.get('card').value;
    this.paymentpayload.expirymonth = this.detailsform.get('expirymonth').value;
    this.paymentpayload.expiryyear = this.detailsform.get('expiryyear').value;
    this.paymentpayload.amount = this.detailsform.get('amount').value;
  }
}