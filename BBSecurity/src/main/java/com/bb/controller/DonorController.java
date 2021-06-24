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

import com.bb.models.DonorModel;
import com.bb.repository.DonorRepository;

@RestController
@CrossOrigin(origins="*")
@Transactional
@RequestMapping("/donors")
public class DonorController 
{
	@Autowired
	DonorRepository donorRepository;
	
	@Transactional
	@RequestMapping(path="")
	public List<DonorModel> getDonors()
	{
		donorRepository.deleteAfter90Days();
		return donorRepository.findAll();
	}
	
	@PostMapping(path="/donate")
	public void donate(@RequestBody DonorModel model) {
		model.setActive(false);
		donorRepository.save(model);
	}
	
	@PostMapping(path="/edit")
	public void update(@RequestBody DonorModel model) 
	{
		model.setActive(true);
		donorRepository.save(model);
	}
	
	@GetMapping(path="/email/{email}")
	public DonorModel getByEmail(@PathVariable String email) throws Exception
	{
		return donorRepository.findByEmail(email).orElseThrow(()->new Exception("User not found"));
	}
	
	@GetMapping(path="/bloodgroup/{bloodGroup}")
	public List<DonorModel> getByBlood(@PathVariable String bloodGroup)
	{
		return donorRepository.findByBloodGroup(bloodGroup);
	}
	
	
	@PostMapping(path="/updateRequest")
	public void updateDonorRequest(@RequestBody DonorModel model)
	{
		donorRepository.save(model);
	}
	
	@DeleteMapping(path="/delete/{email}")
	public void deleteByEmail(@PathVariable String email) 
	{
		donorRepository.deleteByEmail(email);	
	}
	
	
}
