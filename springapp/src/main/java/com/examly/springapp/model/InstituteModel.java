package com.examly.springapp.model;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name="institute")
public class InstituteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="instituteId")
    private int instituteId;

    @Column(name = "instituteName")
    private String instituteName;

    @Column(name = "instituteDescription")
    private  String instituteDescription;

    @Column(name = "instituteAddress")
    private String instituteAddress;

    @Column(name = "mobileNumber")
    private String mobileNo;

    @Column(name="email")
    private String email;

    @Column(name="imgUrl")
    private String imgUrl;

    InstituteModel(){
        
    }

    public InstituteModel(int instituteId, String instituteName, String instituteDescription, String instituteAddress, String mobileNo, String email, String imgUrl) {
        this.instituteId = instituteId;
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.mobileNo = mobileNo;
        this.email = email;
        this.imgUrl = imgUrl;
    }





    public int getInstituteId() {
        return instituteId;
    }

    // public void setInstituteId(int instituteId) {
    //     this.instituteId = instituteId;
    // }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getInstituteName() {
        return instituteName;
    }

    public void setInstituteName(String instituteName) {
        this.instituteName = instituteName;
    }

    public String getInstituteDescription() {
        return instituteDescription;
    }

    public void setInstituteDescription(String instituteDescription) {
        this.instituteDescription = instituteDescription;
    }

    public String getInstituteAddress() {
        return instituteAddress;
    }

    public void setInstituteAddress(String instituteAddress) {
        this.instituteAddress = instituteAddress;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }





}
