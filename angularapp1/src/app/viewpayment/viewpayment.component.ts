import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../service/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {
  payments : Payment[];
 
  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.getPayment();
  
  }
  private getPayment(){
    this.paymentService.getPaymentList().subscribe(data=>{
      this.payments=data;
    });
  }
}
