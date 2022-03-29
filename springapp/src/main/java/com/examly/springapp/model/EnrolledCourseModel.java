package com.examly.springapp.model;
import javax.persistence.*;
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
@Table(name="ecourse")
public class EnrolledCourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ecourseId")
    private Integer ecourseId;


    EnrolledCourseModel(){
    }
    public EnrolledCourseModel(String ecoursename, String ecourseNationality, String ecoursePincode, String ecourseState, String ecourseAreaName, String ecourseHouseNo, String ecourseMarks, String ecourseAge, String ecourseEmailId, String ecourseAlternateNumber, String ecoursePhoneNumber, String ecourseMotherName, String ecourseFatherName, int ecourseId, String ecourseFirstName, String ecourseLastName, String ecourseMaleorFemale, String ecourseStreetName) {
        this.ecourseId = ecourseId;
	    this.ecourseFirstName = ecourseFirstName;
        this.ecourseLastName = ecourseLastName;
        this.ecourseFatherName = ecourseFatherName;
        this.ecourseMotherName = ecourseMotherName;
        this.ecourseMaleorFemale = ecourseMaleorFemale;
        this.ecoursePhoneNumber = ecoursePhoneNumber;
        this.ecourseAlternateNumber = ecourseAlternateNumber;
        this.ecourseEmailId = ecourseEmailId;
        this.ecourseAge = ecourseAge;
        this.ecourseMarks = ecourseMarks;
        this.ecourseHouseNo = ecourseHouseNo;
        this.ecourseStreetName = ecourseStreetName;
        this.ecourseAreaName = ecourseAreaName;
        this.ecoursePincode = ecoursePincode;
        this.ecourseState = ecourseState;
        this.ecourseNationality = ecourseNationality;
        this.ecoursename = ecoursename;
    }
    // @NotEmpty
    @Column(name="ecourseFirstName")
    @NotNull
    private String ecourseFirstName;

    // @NotEmpty
    @NotNull
    @Column(name="ecoursename")
    @NotNull
    private String ecoursename;

    // @NotEmpty
    @Column(name="ecourseLastName")
    @NotNull
    private String ecourseLastName;

    // @NotEmpty
    @Column(name="ecourseFatherName")
    @NotNull
    private String ecourseFatherName;

    // @NotEmpty
    // @NotNull
    @Column(name="ecourseMaleorFemale")
    @NotNull
    private String ecourseMaleorFemale;

    // @NotEmpty
    // @NotNull
    @Column(name="ecoursePhoneNumber")
    @NotNull
    private String ecoursePhoneNumber;

    // @NotEmpty

    @Column(name="ecourseAlternateNumber")
    @NotNull
    private String ecourseAlternateNumber;

    // @NotEmpty
    
    @Column(name="ecourseEmailId")
    @Email
    @NotNull
    private String ecourseEmailId;

    // @NotEmpty
    @Column(name="ecourseAge")
    @NotNull
    private String ecourseAge;


    @Column(name="ecourseMarks")
    private String ecourseMarks;

    // @NotEmpty
    
    @Column(name="ecourseHouseNo")
    @NotNull
    private String ecourseHouseNo;

    // @NotEmpty
    
    @Column(name="ecourseStreetName")
    @NotNull
    private String ecourseStreetName;

    // @NotEmpty
    
    @Column(name="ecourseAreaName")
    @NotNull
    private String ecourseAreaName;

    // @NotEmpty
    
    @Column(name="ecoursePincode")
    @NotNull
    private String ecoursePincode;

    // @NotEmpty
    
    @Column(name="ecourseState")
    @NotNull
    private String ecourseState;

    // @NotEmpty
    
    @Column(name="ecourseNationality")
    @NotNull
    private String ecourseNationality;

    // @NotEmpty
    
    @Column(name="ecourseMotherName")
    @NotNull
    private String ecourseMotherName;
    
    public int getECourseId(){
        return ecourseId;
    }
    public void setECourseId(int ecourseId){
        this.ecourseId = ecourseId;
    }

    public String getECourseName() {
        return ecoursename;
    }

    public void setECourseName(String ecoursename) {
        this.ecoursename = ecoursename;
    }


    public String getECourseFirstName() {
        return ecourseFirstName;
    }

    public void setECourseFirstName(String ecourseFirstName) {
        this.ecourseFirstName = ecourseFirstName;
    }

    public String getECourseLastName() {
        return ecourseLastName;
    }

    public void setECourseLastName(String ecourseLastName) {
        this.ecourseLastName = ecourseLastName;
    }

    public String getECourseFatherName(){
        return ecourseFatherName;
    }
    public void setECourseFatherName(String ecourseFatherName) {
        this.ecourseFatherName = ecourseFatherName;
    }
    
    public String getECourseMotherName(){
        return ecourseMotherName;
    }
    public void setECourseMotherName(String ecourseMotherName) {
        this.ecourseMotherName = ecourseMotherName;
    }

    public String getECourseMaleorFemale(){
        return ecourseMaleorFemale;
    }
    public void setECourseMaleorFemale(String ecourseMaleorFemale) {
        this.ecourseMaleorFemale = ecourseMaleorFemale;
    }

    public String getECoursePhoneNumber(){
        return ecoursePhoneNumber;
    }
    public void setECoursePhoneNumber(String ecoursePhoneNumber) {
        this.ecoursePhoneNumber = ecoursePhoneNumber;
    }

    public String getECourseAlternateNumber(){
        return ecourseAlternateNumber;
    }
    public void setECourseAlternateNumber(String ecourseAlternateNumber) {
        this.ecourseAlternateNumber = ecourseAlternateNumber;
    }

    public String getECourseAge(){
        return ecourseAge;
    }
    public void setECourseAge(String ecourseAge) {
        this.ecourseAge = ecourseAge;
    }

    public String getECourseEmailId(){
        return ecourseEmailId;
    }
    public void setECourseEmailId(String ecourseEmailId) {
        this.ecourseEmailId = ecourseEmailId;
    }

    // public String getECourseMarks(){
    //     return ecourseMarks;
    // }
    public void setECourseMarks(String ecourseMarks) {
        this.ecourseMarks = ecourseMarks;
    }

    public String getECourseHouseNo(){
        return ecourseHouseNo;
    }
    public void setECourseHouseNo(String ecourseHouseNo) {
        this.ecourseHouseNo = ecourseHouseNo;
    }

    public String getECourseStreetName(){
        return ecourseStreetName;
    }
    public void setECourseStreetName(String ecourseStreetName) {
        this.ecourseStreetName = ecourseStreetName;
    }

    public String getECourseAreaName(){
        return ecourseAreaName;
    }
    public void setECourseAreaName(String ecourseAreaName) {
        this.ecourseAreaName = ecourseAreaName;
    }

    public String getECourseState(){
        return ecourseState;
    }
    public void setECourseState(String ecourseState) {
        this.ecourseState = ecourseState;
    }

    public String getECoursePincode(){
        return ecoursePincode;
    }
    public void setECoursePincode(String ecoursePincode) {
        this.ecoursePincode = ecoursePincode;
    }

    public String getECourseNationality(){
        return ecourseNationality;
    }
    public void setECourseNationality(String ecourseNationality) {
        this.ecourseNationality = ecourseNationality;
    }





}