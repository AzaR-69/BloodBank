package com.bb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb.models.User;

public interface UserRepository extends JpaRepository<User, String>{
	Optional<User> findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
	Optional<User> findById(String id);
}
