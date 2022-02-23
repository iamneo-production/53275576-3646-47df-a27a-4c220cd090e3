package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v2/")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/course")
    public List<CourseModel> getAllCourse(){
        return courseRepository.findAll();
    }
}
