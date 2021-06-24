package com.bb.payload;

import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {
	@NotBlank
	@Size(min=8,max = 50)
	private String name;
	
	@NotBlank
	@Size(min=5,max = 20)
	private String username;
	
	@NotBlank
	@Size(max = 50)
	private String email;
	@NotBlank
	@Size(max = 10)
	private String mobile;
	@NotBlank
	@Size(max = 15)
	private String dob;
	@NotBlank
	@Size(min=8,max = 60)
	private String password;
	private Set<String> role;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<String> getRole() {
		return role;
	}
	public void setRole(Set<String> role) {
		this.role = role;
	}
	
}
