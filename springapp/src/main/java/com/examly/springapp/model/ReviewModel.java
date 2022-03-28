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
@Table(name="review")
public class ReviewModel {

    @Id
    @Column(name="reviewId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer reviewId;

    ReviewModel(){
    }

    public ReviewModel( String reviewName, String reviewComments) {
        // this.reviewId = reviewId;
        this.reviewName = reviewName;
        this.reviewComments = reviewComments;
      //  this.reviewStars = reviewStars;
        
    }

    @NotEmpty
    @NotNull
    @Column(name="reviewName")
    private String reviewName;

    @NotEmpty
    @NotNull
    @Column(name="reviewComments")
    private String reviewComments;

    // @Column(name="reviewStars")
    // private Integer reviewStars;

    public String getReviewName() {
        return reviewName;
    }

    public void setReviewName(String reviewName) {
        this.reviewName = reviewName;
    }
     public String getReviewComments() {
        return reviewComments;
    }

    public void setReviewComments(String reviewComments) {
        this.reviewComments = reviewComments;
    }

    // public int getReviewStars(){
    //     return reviewStars;
    // }
    // public void setReviewStars(int reviewStars){
    //     this.reviewStars = reviewStars;
    // }
    // public int getReviewId(){
    //     return reviewId;
    // }
    // public void setReviewId(int reviewId){
    //     this.reviewId = reviewId;
    // }
}
