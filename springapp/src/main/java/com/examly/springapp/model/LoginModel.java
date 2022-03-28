package com.examly.springapp.model;

import java.util.Objects;

public class LoginModel {

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 8, max = 16)
    private String password;

    public LoginModel() {
    }

    public LoginModel(String email, String password) {
        this.email = email;
        this.password = password;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoginModel that = (LoginModel) o;
        return Objects.equals(email, that.getEmail()) && Objects.equals(password, that.getPassword());
    }

}
