package com.bb.repository;

import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bb.models.DonorModel;

public interface DonorRepository extends JpaRepository<DonorModel, Long> {
	Optional<DonorModel> findByEmail(String email);
	List<DonorModel> findByBloodGroup(String bloodGroup);
	public void deleteByEmail(String email);
	
	@Modifying
	@Query(value="DELETE FROM donor WHERE donated_date < now() - interval 90 DAY",nativeQuery=true)
	public void deleteAfter90Days();
}
