package com.bb.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.bb.models.RequestModel;
import com.bb.models.User;
import com.bb.payload.JwtResponse;
import com.bb.repository.RequestRepository;
import com.bb.repository.UserRepository;
import com.bb.security.JwtUtil;
import com.bb.services.MyUserDetails;

@CrossOrigin(origins="*")
@RestController
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RequestRepository request;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtil jwtUtil;
	
	
	@GetMapping("/")
	public String home() {
		return "HOME";
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody User user){
		Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt=jwtUtil.generateJwtToken(authentication);
		MyUserDetails userDetails=(MyUserDetails) authentication.getPrincipal();
		List<String> roles=userDetails.getAuthorities().stream().map(item->item.getAuthority()).collect(Collectors.toList());
		String role=roles.get(0);
		return ResponseEntity.ok(new JwtResponse(jwt, 
				 userDetails.getId(), 
				 userDetails.getUsername(), 
				 userDetails.getEmail(), 
				 role));
	}
	
	
	@PostMapping("/signup")
	public void register(@Valid @RequestBody User user) throws Exception
	{
		if(userRepository.existsByUsername(user.getUsername())) {
			throw new Exception("Error: username is already taken");
		}
		if(userRepository.existsByEmail(user.getEmail())) {
			throw new Exception("Error: email is already taken");
		}
		user.setPassword(encoder.encode(user.getPassword()));
		user.setRole("ROLE_USER");
		userRepository.save(user);
	}
	
	@PostMapping("/addAdmin")
	public String add(@RequestBody User model) {
		model.setPassword(encoder.encode(model.getPassword()));
		model.setRole("ROLE_ADMIN");
		userRepository.save(model);
		return "success";
	}
	
	@GetMapping(value="/findById/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public User getById(@PathVariable String id) throws Exception {
		return userRepository.findById(id).orElseThrow(()->new Exception("User not found"));
	}
	
	@PutMapping(value="/updateProfile")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public void update(@RequestBody User user) {
		if(userRepository.existsById(user.getId())){
			userRepository.save(user);
		}
	}
	
	@PostMapping(value="request")
	@PreAuthorize("hasRole('USER')")
	public void request(@RequestBody RequestModel model) {
		request.save(model);
	}
	
	@GetMapping(value="/getUsers")
	@PreAuthorize("hasRole('ADMIN')")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@DeleteMapping(value="/deleteUser/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteUser(@PathVariable String id) {
		userRepository.deleteById(id);
	}
}
