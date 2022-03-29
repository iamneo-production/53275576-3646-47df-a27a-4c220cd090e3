package com.examly.springapp.model;

import javax.persistence.*;
import java.util.Objects;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.Valid;

import javax.persistence.* ;
import java.util.Objects ;
import javax.persistence.GeneratedValue ;
import javax.persistence.GenerationType ;
 
@Entity
@Table(name  = "paymentdetails")
public class PaymentModel  {
     
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="paymentid")
    private int paymentid;
   
    @Column(name = "email", unique=true)
    private String email;

    // @NotEmpty
    // @NotNull
    @Column(name = "name")
    private String pname;



    // @NotEmpty
    // @NotNull
    @Column(name = "address")
    private String address;


    // @NotEmpty
    // @NotNull
    @Column(name = "city")
    private String city;

    // @NotEmpty
    // @NotNull
    @Column(name = "state")
    private String state;

    // @NotEmpty
    // @NotNull
    @Column(name = "zipcode")
    private String zipcode;

    // @NotEmpty
    // @NotNull
    @Column(name = "card")
    private String card;

    // @NotEmpty
    // @NotNull
    @Column(name = "expiryMonth")
    private String expiryMonth;

    // @NotEmpty
    // @NotNull
    @Column(name = "expiryYear")
    private String expiryYear;

    // @NotEmpty
    // @NotNull
    @Column(name = "cvvNum")
    private String cvvNum;

    // @NotEmpty
    // @NotNull
    @Column(name = "amount")
    private String amount;

    // @NotEmpty
    // @NotNull
    @Column(name = "mobileNumber", unique=true)
    private String mobileNumber;
    PaymentModel() {
    }

    public PaymentModel(String pname, String email, String address, String city, String state, String zipcode,
            String card, String expiryMonth, String expiryYear, String cvvNum, String amount, String mobileNumber) {
        this.pname = pname;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.card = card;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.cvvNum = cvvNum;
        this.amount = amount;
        this.mobileNumber = mobileNumber;
    }

    public String getName() {
        return pname;
    }

    public void setName(String pname) {
        this.pname = pname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public String getExpiryMonth() {
        return expiryMonth;
    }

    public void setExpiryMonth(String expiryMonth) {
        this.expiryMonth = expiryMonth;
    }

    public String getExpiryYear() {
        return expiryYear;
    }

    public void setExpiryYear(String expiryYear) {
        this.expiryYear = expiryYear;
    }

    public String getCvvNum() {
        return cvvNum;
    }

    public void setCvvNum(String cvvNum) {
        this.cvvNum = cvvNum;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

}
