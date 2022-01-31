package com.examly.springapp.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name= "admin")
public class AdminModel {

    AdminModel(){}

    @Id
    @Column(name = "email")
    private String email;


    @Column(name = "password")
    private String password;


    @Column(name= "mobileNumber")
    private String mobileNumber;

    @Column(name = "userRole")
    private String userRole;


    public AdminModel(String email, String password, String mobileNumber, String userRole) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }


}
