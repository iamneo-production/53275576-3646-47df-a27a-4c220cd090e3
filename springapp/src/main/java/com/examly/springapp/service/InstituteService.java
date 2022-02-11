package com.examly.springapp.service;

//import repository.InstituteRepository;
import com.examly.springapp.repository.InstituteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepository instituteRepository;
}
