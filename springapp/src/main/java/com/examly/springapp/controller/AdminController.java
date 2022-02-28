package com.examly.springapp.controller;
import com.examly.springapp.exception.ResourceNotFound;

import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import com.examly.springapp.repository.CourseRepository;
import com.examly.springapp.repository.StudentRepository;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.model.CourseModel;


// import org.springframework.web.bind.annotation.DeletedMapping;

import org.apache.catalina.User;
import com.examly.springapp.repository.InstituteRepository;

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
public class AdminController {

    // @Autowired
    // private InstituteService instituteService;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private InstituteRepository instituteRepository;

    

    // @GetMapping("/institutes")
    // public List<InstituteModel> getAllInstitute(){ return instituteService.getAllInstitutes(); }

    @GetMapping("/institute")
    public List<InstituteModel> getAllInstitute(){
        return instituteRepository.findAll();
    }
    @GetMapping("/allinstitute")
    public List<InstituteModel> getInstitute(){
        return instituteRepository.findAll();
    }

    @PostMapping("/addinstitute")
    public InstituteModel createInstitute(@RequestBody InstituteModel institute){
        return instituteRepository.save(institute);
    }

    @GetMapping("/institute/{id}")
    public ResponseEntity<InstituteModel> getInstituteById(@PathVariable Integer id){
        InstituteModel institute = instituteRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Institute not exixts with this ID : "+id));

        return ResponseEntity.ok(institute);
        
    }

    @PutMapping("/institute/{id}")
    public ResponseEntity<InstituteModel> updateInstitute(@PathVariable Integer id, @RequestBody InstituteModel instituteDetails){
        InstituteModel institute = instituteRepository.findById(id).orElseThrow(()-> new ResourceNotFound("institute not found with id :"+id));

        institute.setInstituteName(instituteDetails.getInstituteName());
        institute.setInstituteDescription(instituteDetails.getInstituteDescription());
        institute.setInstituteAddress(instituteDetails.getInstituteAddress());
        institute.setMobileNo(instituteDetails.getMobileNo());
        institute.setInstituteId(instituteDetails.getInstituteId());
        institute.setImgUrl(instituteDetails.getImgUrl());
        institute.setEmail(instituteDetails.getEmail());




        InstituteModel updateInstitute = instituteRepository.save(institute);
        return ResponseEntity.ok(updateInstitute);
    }

    @DeleteMapping("/institute/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteInstitute(@PathVariable Integer id){
        InstituteModel institute = instituteRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Employee not exists with id : "+id));
        instituteRepository.delete(institute);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
      // @Autowired
    // private CourseService courseService;

    

    // @GetMapping("/courses")
    // public List<CourseModel> getAllCourse(){ return courseService.getAllCourses(); }

    @GetMapping("/allcourse")
    public List<CourseModel> getCourse(){
        return courseRepository.findAll();
    }

    @GetMapping("/course")
    public List<CourseModel> getAllCourse(){
        return courseRepository.findAll();
    }

    @PostMapping("/addcourse")
    public CourseModel createCourse(@RequestBody CourseModel course){
        return courseRepository.save(course);
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<CourseModel> getCourseById(@PathVariable Integer id){
        CourseModel course = courseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Course not exixts with this ID : "+id));

        return ResponseEntity.ok(course);
        
    }

    @PutMapping("/course/{id}")
    public ResponseEntity<CourseModel> updateCourse(@PathVariable Integer id, @RequestBody CourseModel courseDetails){
        CourseModel course = courseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("course not found with id :"+id));

        course.setCourseName(courseDetails.getCourseName());
        course.setCourseDescription(courseDetails.getCourseDescription());
        course.setCourseDuration(courseDetails.getCourseDuration());
        //course.setCourseAddress(courseDetails.getCoureAddress());

        CourseModel updateCourse = courseRepository.save(course);
        return ResponseEntity.ok(updateCourse);
    }

    @DeleteMapping("/course/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Integer id){
        CourseModel course = courseRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Employee not exists with id : "+id));
        courseRepository.delete(course);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    

}

