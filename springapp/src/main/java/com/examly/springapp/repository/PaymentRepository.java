//package repository;
package com.examly.springapp.repository;

import com.examly.springapp.model.PaymentModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentRepository extends JpaRepository<PaymentModel, String> {

}
