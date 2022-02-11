//package repository;
package com.examly.springapp.repository;

import com.examly.springapp.model.InstituteModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituteRepository extends JpaRepository<InstituteModel, Integer> {
}
