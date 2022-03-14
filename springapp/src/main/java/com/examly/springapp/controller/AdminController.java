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

    @Autowired
    private StudentRepository studentRepository;

    

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
        // institute.setInstituteAddress(instituteDetails.getInstituteDescription());
        institute.setInstituteAddress(instituteDetails.getInstituteAddress());
        institute.setEmail(instituteDetails.getEmail());
        institute.setMobileNo(instituteDetails.getMobileNo());
        institute.setImgUrl(instituteDetails.getImgUrl());
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
        course.setCourseTiming(courseDetails.getCourseTiming());
        course.setCourseEnrolled(courseDetails.getCourseEnrolled());
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

    @GetMapping("/student")
    public List<StudentModel> getAllStudent(){
        return studentRepository.findAll();
    }
    @GetMapping("/allstudent")
    public List<StudentModel> getStudent(){
        return studentRepository.findAll();
    }

    @PostMapping("/addstudent")
    public StudentModel createStudent(@RequestBody StudentModel student){
        return studentRepository.save(student);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<StudentModel> getStudentById(@PathVariable Integer id){
        StudentModel student = studentRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Student not exixts with this ID : "+id));

        return ResponseEntity.ok(student);
        
    }

    @PutMapping("/student/{id}")
    public ResponseEntity<StudentModel> updateStudent(@PathVariable Integer id, @RequestBody StudentModel studentDetails){
        StudentModel student = studentRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Student not found with id :"+id));

        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setFatherName(studentDetails.getFatherName());
        student.setMotherName(studentDetails.getMotherName());
        student.setEmail(studentDetails.getEmail());
        student.setAge(studentDetails.getAge());
        student.setPhoneNumber1(studentDetails.getPhoneNumber1());
        student.setPhoneNumber2(studentDetails.getPhoneNumber2());
        student.setMaleOrFemale(studentDetails.getMaleOrFemale());
        student.setHouseNo(studentDetails.getHouseNo());
        student.setStreetName(studentDetails.getStreetName());
        student.setAreaName(studentDetails.getAreaName());
        student.setState(studentDetails.getState());
        student.setPincode(studentDetails.getPincode());
        student.setNationality(studentDetails.getNationality());

        StudentModel updateStudent = studentRepository.save(student);
        return ResponseEntity.ok(updateStudent);
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Integer id){
        StudentModel student = studentRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Student not exists with id : "+id));
        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}

