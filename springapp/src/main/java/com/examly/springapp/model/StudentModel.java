package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;
import javax.persistence.Id;

import java.util.Objects;

@Entity
@Table(name = "student")
public class StudentModel {

    @Id
    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private Date lastName;

    @Column(name = "fatherName")
    private String fatherName;

    @Column(name = "motherName")
    private String motherName;

    @Column(name = "maleOrFemale")
    private int maleOrFemale;

    @Column(name = "phoneNumber1")
    private int phoneNumber1;

    @Column(name = "phoneNumber2")
    private int phoneNumber2;

    @Column(name = "email")
    private int email;

    @Column(name = "age")
    private int age;

    @Column(name = "houseNo")
    private int houseNo;

    @Column(name = "streetName")
    private int streetName;

    @Column(name = "areaName")
    private int areaName;

    @Column(name = "pincode")
    private int pincode;

    @Column(name = "state")
    private int state;

    @Column(name = "nationality")
    private int nationality;

    

    StudentModel(){

        
    }

    public int getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lasttName) {
        this.lasttName = lastName;
    }

    public Date getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getMaleOrFemale() {
        return maleOrFemale;
    }

    public void setMaleOrFemale(String maleOrFemale) {
        this.maleOrFemale = maleOrFemale;
    }

    public int getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

     public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

     public int getPhoneNumber1() {
        return phoneNumber1;
    }

    public void setPhoneNumber1(int phoneNumber1) {
        this.phoneNumber1 = phoneNumber1;
    }

     public int getPhoneNumber2() {
        return phoneNumber2;
    }

    public void setPhoneNumber2(int phoneNumber2) {
        this.phoneNumber2 = phoneNumber2;
    }

     public int getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

     public int getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

     public int getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }


    public int getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public int getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }



    public StudentModel(String firstName,String lastName,String fatherName,String motherName,String maleOrFemale, 
    int phoneNumber1,int phoneNumber2,String email,int age,String houseNo,String streetName,String areaName,String state,int pincode,String nationality) {
       this.firstName=firstName;
       this.lastName=lastName;
       this.fatherName=fatherName;
       this.motherName=motherName;
       this.maleOrFemale=maleOrFemale;
       this.phoneNumber1=phoneNumber1;
       this.phoneNumber2=phoneNumber2;
       this.email=email;
       this.age=age;
       this.houseNo=houseNo;
       this.streetName=streetName;
       this.state=state;
       this.areaName=areaName;
       this.pincode=pincode;
       this.nationality=nationality
    }



}
