//package repository;
package com.examly.springapp.repository;

import com.examly.springapp.model.ReviewModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel, Integer> {
}
