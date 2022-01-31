package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "student")
public class StudentModel {

    @Column(name = "studentId")
    private int studentId;

    @Column(name = "studentName")
    private String studentName;

    @Column(name = "DOB")
    private Date DOB;

    @Column(name = "address")
    private String address;

    @Column(name = "mobileNo")
    private String mobileNo;

    @Column(name = "std")
    private int std;

    StudentModel(){}

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public int getStd() {
        return std;
    }

    public void setStd(int std) {
        this.std = std;
    }



    public StudentModel(int studentId, String studentName, Date DOB, String address, String mobileNo, int std) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.DOB = DOB;
        this.address = address;
        this.mobileNo = mobileNo;
        this.std = std;
    }



}
