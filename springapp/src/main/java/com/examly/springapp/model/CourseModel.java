package com.examly.springapp.model;
import javax.persistence.*;
import java.util.Objects;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity
@Table(name="course")
public class CourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="courseId")
    private int courseId;


    CourseModel(){
    }
    public CourseModel(int courseId, String courseTiming, String courseEnrolled, String courseName, String courseDescription, String courseDuration) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseEnrolled = courseEnrolled;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
        this.courseTiming = courseTiming;
    }

    @Column(name="courseEnrolled")
    private String courseEnrolled;

    @Column(name="courseName")
    private String courseName;

    @Column(name="courseDescription")
    private String courseDescription;

    @Column(name="courseDuration")
    private String courseDuration;

    @Column(name="courseTiming")
    private String courseTiming;

    public int getCourseId(){
        return courseId;
    }
    // public void setCourseId(int courseId){
    //     this.courseId = courseId;
    // }


    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
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

    public String getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }

    public String getCourseTiming(){
        return courseTiming;
    }
    public void setCourseTiming(String courseTiming) {
        this.courseTiming = courseTiming;
    }


}
