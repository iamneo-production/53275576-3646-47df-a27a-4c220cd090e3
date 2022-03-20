package com.examly.springapp.controller;
import com.examly.springapp.exception.ResourceNotFound;
import com.examly.springapp.model.ReviewModel;
import com.examly.springapp.model.EnrolledCourseModel;
//import com.examly.springapp.service.EnrolledCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.DeletedMapping;

import org.apache.catalina.User;
import com.examly.springapp.repository.EnrolledCourseRepository;
import com.examly.springapp.repository.ReviewRepository;


import java.lang.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/")
public class UserController {

    // @Autowired
    // private ECourseService ecourseService;

    @Autowired
    private EnrolledCourseRepository ecourseRepository;
    @Autowired
    private ReviewRepository reviewRepository;

    // @GetMapping("/ecourses")
    // public List<ECourseModel> getAllECourse(){ return ecourseService.getAllECourses(); }

    @GetMapping("/ecourse")
    public List<EnrolledCourseModel> getAllECourse(){
        return ecourseRepository.findAll();
    }

    @PostMapping("/addecourse")
    public EnrolledCourseModel createECourse(@RequestBody EnrolledCourseModel ecourse){
        return ecourseRepository.save(ecourse);
    }

    @GetMapping("/ecourse/{id}")
    public ResponseEntity<EnrolledCourseModel> getECourseById(@PathVariable Integer id){
        EnrolledCourseModel ecourse = ecourseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("EnrolledCourse not exixts with this ID : "+id));

        return ResponseEntity.ok(ecourse);
        
    }

    @PutMapping("/ecourse/{id}")
    public ResponseEntity<EnrolledCourseModel> updateECourse(@PathVariable Integer id, @RequestBody EnrolledCourseModel ecourseDetails){
        EnrolledCourseModel ecourse = ecourseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("ecourse not found with id :"+id));
        ecourse.setECourseName(ecourseDetails.getECourseName());
        ecourse.setECourseFirstName(ecourseDetails.getECourseFirstName());
        ecourse.setECourseLastName(ecourseDetails.getECourseLastName());
        ecourse.setECoursePhoneNumber(ecourseDetails.getECoursePhoneNumber());
        ecourse.setECourseAlternateNumber(ecourseDetails.getECourseAlternateNumber());
        ecourse.setECourseFatherName(ecourseDetails.getECourseFatherName());
        ecourse.setECourseMotherName(ecourseDetails.getECourseMotherName());
        ecourse.setECourseMaleorFemale(ecourseDetails.getECourseMaleorFemale());
        ecourse.setECourseStreetName(ecourseDetails.getECourseStreetName());
        ecourse.setECourseAreaName(ecourseDetails.getECourseAreaName());
        ecourse.setECoursePincode(ecourseDetails.getECoursePincode());
        ecourse.setECourseState(ecourseDetails.getECourseState());
	    ecourse.setECourseNationality(ecourseDetails.getECourseNationality());
        ecourse.setECourseHouseNo(ecourseDetails.getECourseHouseNo());
        ecourse.setECourseAge(ecourseDetails.getECourseAge());
        ecourse.setECourseEmailId(ecourseDetails.getECourseEmailId());
        ecourse.setECourseMarks(ecourseDetails.getECourseMarks());
        
    

        EnrolledCourseModel updateECourse = ecourseRepository.save(ecourse);
        return ResponseEntity.ok(updateECourse);
    }

    @DeleteMapping("/ecourse/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteECourse(@PathVariable Integer id){
        EnrolledCourseModel ecourse = ecourseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Employee not exists with id : "+id));
        ecourseRepository.delete(ecourse);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
     @GetMapping("/review")
    public List<ReviewModel> getAllReview(){
        return reviewRepository.findAll();
    }
    @DeleteMapping("/review/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteReview(@PathVariable Integer id){
        ReviewModel review = reviewRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Employee not exists with id : "+id));
        reviewRepository.delete(review);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/addreview")
    public ReviewModel createReview(@RequestBody ReviewModel review){
        return reviewRepository.save(review);
    }
}
