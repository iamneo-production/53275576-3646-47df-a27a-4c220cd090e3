package com.examly.springapp.service;

//import repository.InstituteRepository;
import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.repository.InstituteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepository instituteRepository;

    // public List<InstituteModel> getAllInstitutes(){
    //     List<InstituteModel> institutes = new ArrayList<>();
    //     InstituteRepository.findAll().forEach(institutes::add );
    //     return institutes;
    // }

    // public boolean addInstitute(InstituteModel institute){
    //     if(InstituteRepository.findById(institute.getInstituteId()).isEmpty()){
    //         InstituteRepository.save(institute);
    //         return true;
    //     }
    //     return false;
    // }

}
