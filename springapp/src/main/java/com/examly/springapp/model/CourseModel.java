package com.examly.springapp.model;

@Entity
@Table(name="course")
public class CourseModel {

    @Id
    @Column(name="courseid")
    private int courseId;


    CourseModel(){
    }
    public CourseModel(int courseId, String courseName, String courseDescription, int courseDuration) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
    }

    @Column(name="coursename")
    private String courseName;

    @Column(name="coursedescription")
    private String courseDescription;

    @Column(name="courseduration")
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
