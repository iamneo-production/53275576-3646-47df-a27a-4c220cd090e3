import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/payment";
  filter: string;
  constructor(private httpClient: HttpClient) { }

  getPaymentList(): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/payment")
  };

  createPayment(payment: Payment): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addpayment",payment);
  }
}