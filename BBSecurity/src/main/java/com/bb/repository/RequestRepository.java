package com.bb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb.models.RequestModel;

public interface RequestRepository extends JpaRepository<RequestModel, Long> {
	List<RequestModel> findByEmail(String email);
	public void deleteByEmailAndPatientName(String email,String patientName);
}
