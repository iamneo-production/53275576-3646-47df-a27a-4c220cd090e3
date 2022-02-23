package com.examly.springapp.model;
import javax.persistence.*;
import java.util.Objects;
@Entity
@Table(name="course")
public class CourseModel {

    @Id
    @Column(name="courseId")
    private Integer courseId;


    CourseModel(){
    }
    public CourseModel(int courseId, String courseName, String courseDescription, int courseDuration) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
    }

    @Column(name="courseName")
    private String courseName;

    @Column(name="courseDescription")
    private String courseDescription;

    @Column(name="courseDuration")
    private int courseDuration;


    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
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


}
