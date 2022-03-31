package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Objects;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.Valid;

@Entity
@Table(name = "student")
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentId")
    private int studentId;

    
    @Column(name = "firstName")
    @NotNull
    private String firstName;

    @Column(name = "lastName")
    @NotNull
    private String lastName;

    @Column(name = "fatherName")
    @NotNull
    private String fatherName;

    @Column(name = "motherName")
    @NotNull
    private String motherName;

    @Column(name = "maleOrFemale")
    @NotNull
    private String maleOrFemale;

    @Column(name = "phoneNumber1", unique=true)
    @NotNull
    private String phoneNumber1;

    @Column(name = "phoneNumber2", unique=true)
    @NotNull
    private String phoneNumber2;

    @Column(name = "email", unique=true)
    @NotNull
    private String email;

    @Column(name = "age")
    @NotNull
    private int age;

    @Column(name = "houseNo")
    @NotNull
    private String houseNo;

    @Column(name = "streetName")
    @NotNull
    private String streetName;

    @Column(name = "areaName")
    @NotNull
    private String areaName;

    @Column(name = "pincode")
    @NotNull
    private String pincode;

    @Column(name = "state")
    @NotNull
    private String state;

    @Column(name = "nationality")
    @NotNull
    private String nationality;

    

    StudentModel(){

        
    }

    public int getStudentId() {
        return studentId;
    }

    // public void setStudentId(int studentId) {
    //     this.studentId = studentId;
    // }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFatherName() {
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

    public String getEmail() {
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

     public String getPhoneNumber1() {
        return phoneNumber1;
    }

    public void setPhoneNumber1(String phoneNumber1) {
        this.phoneNumber1 = phoneNumber1;
    }

     public String getPhoneNumber2() {
        return phoneNumber2;
    }

    public void setPhoneNumber2(String phoneNumber2) {
        this.phoneNumber2 = phoneNumber2;
    }

     public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

     public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

     public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }


    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }



    public StudentModel(int studentId,String firstName,String lastName,String fatherName,String motherName,String maleOrFemale, 
    String phoneNumber1,String phoneNumber2,String email,int age,String houseNo,String streetName,String areaName,String state,String pincode,String nationality) {

        this.studentId =studentId;
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
       this.nationality=nationality;
    }



}