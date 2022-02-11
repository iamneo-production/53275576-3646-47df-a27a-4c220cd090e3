package com.examly.springapp.service;

//import repository.StudentRepository;
import com.examly.springapp.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentService;
}
