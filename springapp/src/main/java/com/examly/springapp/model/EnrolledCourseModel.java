package com.examly.springapp.model;
import javax.persistence.*;
import java.util.Objects;
@Entity
@Table(name="ecourse")
public class EnrolledCourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ecourseId")
    private Integer ecourseId;


    EnrolledCourseModel(){
    }
    public EnrolledCourseModel(String ecoursename, String ecourseNationality, String ecoursePincode, String ecourseState, String ecourseAreaName, String ecourseSrtreetName, String ecourseHouseNo, String ecourseMarks, String ecourseAge, String ecourseEmailId, String ecourseAlternateNumber, String ecoursePhoneNumber, String ecourseMotherName, String ecourseFatherName, int ecourseId, String ecourseFirstName, String ecourseLastName, String ecourseMaleorFemale, String ecourseStreetName) {
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
    @Column(name="ecourseFirstName")
    private String ecourseFirstName;

    @Column(name="ecoursename")
    private String ecoursename;

    @Column(name="ecourseLastName")
    private String ecourseLastName;

    @Column(name="ecourseFatherName")
    private String ecourseFatherName;

    @Column(name="ecourseMaleorFemale")
    private String ecourseMaleorFemale;

    @Column(name="ecoursePhoneNumber")
    private String ecoursePhoneNumber;

    @Column(name="ecourseAlternateNumber")
    private String ecourseAlternateNumber;

    @Column(name="ecourseEmailId")
    private String ecourseEmailId;

    @Column(name="ecourseAge")
    private String ecourseAge;

    @Column(name="ecourseMarks")
    private String ecourseMarks;

    @Column(name="ecourseHouseNo")
    private String ecourseHouseNo;

    @Column(name="ecourseStreetName")
    private String ecourseStreetName;

    @Column(name="ecourseAreaName")
    private String ecourseAreaName;

    @Column(name="ecoursePincode")
    private String ecoursePincode;

    @Column(name="ecourseState")
    private String ecourseState;

    @Column(name="ecourseNationality")
    private String ecourseNationality;

    @Column(name="ecourseMotherName")
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

    public String getECourseMarks(){
        return ecourseMarks;
    }
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