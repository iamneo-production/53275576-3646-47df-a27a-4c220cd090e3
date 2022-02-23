package com.examly.springapp.model;
import javax.persistence.*;
import java.util.Objects;
@Entity
@Table(name="course")
public class CourseModel {

    @Id
    @Column(name="courseid")
    private Integer courseId;


    CourseModel(){
    }
    public CourseModel(int courseId, String courseName, int courseEnrolled, String courseDescription, int courseDuration, int courseTiming) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseEnrolled = courseEnrolled;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
        this.courseTiming = courseTiming;
    }


    @Column(name="coursename")
    private String courseName;

    @Column(name="courseenrolled")
    private int courseEnrolled;

    @Column(name="coursedescription")
    private String courseDescription;

    @Column(name="courseduration")
    private int courseDuration;

    @Column(name="coursetiming")
    private int courseTiming;

    public int getCourseId(){
        return courseId;
    }
    public void setCourseId(int courseId){
        this.courseId = courseId;
    }


    public int getCourseName() {
        return courseName;
    }

    public void setCourseName(int courseName) {
        this.courseName = courseName;
    }

    public String getCourseEnrolled() {
        return courseEnrolled;
    }

    public void setCourseEnrolled(String courseEnrolled) {
        this.courseEnrolled = courseEnrolled;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public int getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(int courseDuration) {
        this.courseDuration = courseDuration;
    }

    public int getCourseTiming(){
        return courseTiming;
    }
    public void setCourseTiming(int courseTiming) {
        this.courseTiming = courseTiming;
    }


}
