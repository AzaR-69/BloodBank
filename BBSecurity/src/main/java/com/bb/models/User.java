package com.bb.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.*;

@Entity
@Table(name="users",uniqueConstraints= {
		@UniqueConstraint(columnNames="username"),
		@UniqueConstraint(columnNames="email"),
})
public class User {
	@Id
	@Size(max = 20)
	private String id;
	
	@NotBlank
	@Size(max = 50)
	private String name;
	
	@NotBlank
	@Size(max = 20)
	private String username;
	
	@NotBlank
	@Size(max = 50)
	private String email;
	@NotBlank
	@Size(max = 10)
	private String mobile;
	@NotBlank
	@Size(max = 120)
	private String password;
	
//	@ManyToMany(fetch=FetchType.LAZY)
//	@JoinTable(name="user_roles",joinColumns=@JoinColumn(name="user_id"),
//									inverseJoinColumns=@JoinColumn(name="role_id"))
//	private Set<Role> roles=new HashSet<>();
	
	@NotBlank
	private String role;
	
	public User() {}

	public User(String name,String username,String email,String mobile,String password) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
	}
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

//	public Set<Role> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(Set<Role> roles) {
//		this.roles = roles;
//	}
	
	
}
