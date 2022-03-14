package com.examly.springapp.service;

//import repository.CourseRepository;
import com.examly.springapp.repository.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;
}
