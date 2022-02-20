package com.examly.springapp.controller;

import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class AdminController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping("/institutes")
    public List<InstituteModel> getAllInstitute(){ return instituteService.getAllInstitutes(); }
}

