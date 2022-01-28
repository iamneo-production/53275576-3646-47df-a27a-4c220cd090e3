package com.examly.springapp.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="users")
public class UserModel {


    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "username")
    private String username;

    UserModel(){

    }

    public UserModel(String email, String password, String username, String mobileNumber, String userRole, boolean active) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
        this.active = active;
    }

    @Column(name = "mobileNumber")
    private String mobileNumber;

    @Column(name = "userRole")
    private String userRole;

    @Column(name = "active")
    private boolean active;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }


    public boolean equals(Object o){
        if(this == o) return true;
        if(!(o instanceof UserModel)) return false;

        UserModel user = (UserModel) o;
        return Objects .equals(username, user.getUsername()) ||
                Objects.equals(email, user.getEmail()) || Objects.equals(mobileNumber, user.mobileNumber);
    }
}
