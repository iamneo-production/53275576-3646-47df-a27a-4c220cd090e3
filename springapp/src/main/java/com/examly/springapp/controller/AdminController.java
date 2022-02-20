package com.examly.springapp.controller;
import com.examly.springapp.exception.ResourceNotFound;

import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
    private InstituteRepository instituteRepository;

    // @GetMapping("/institutes")
    // public List<InstituteModel> getAllInstitute(){ return instituteService.getAllInstitutes(); }

    @GetMapping("/institute")
    public List<InstituteModel> getAllInstitute(){
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
        institute.setInstituteAddress(instituteDetails.getInstituteDescription());
        institute.setInstituteAddress(instituteDetails.getInstituteAddress());

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
}

