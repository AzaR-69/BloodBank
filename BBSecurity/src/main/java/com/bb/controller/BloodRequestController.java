package com.bb.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bb.repository.RequestRepository;
import com.bb.models.RequestModel;
@RestController
@CrossOrigin(origins="*")
@Transactional
@RequestMapping("/bloodrequest")
public class BloodRequestController {
	@Autowired
	RequestRepository requestRepository;
	
	@GetMapping(path="")
	public List<RequestModel> getRequests(){
		return requestRepository.findAll();
	}
	
	@PostMapping(path="/update")
	public void updateRequest(@RequestBody RequestModel model) {
		requestRepository.save(model);
	}
	
	@GetMapping(path="/getByEmail/{email}")
	public List<RequestModel> getByEmail(@PathVariable String email)
	{
		return requestRepository.findByEmail(email);
	}
	
	@DeleteMapping(path="/delete/{email}/{patientName}")
	public void delete(@PathVariable String email,@PathVariable String patientName)
	{
		try {
			requestRepository.deleteByEmailAndPatientName(email, patientName);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	
}
