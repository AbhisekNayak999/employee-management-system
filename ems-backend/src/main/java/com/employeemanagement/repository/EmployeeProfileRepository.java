package com.employeemanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeemanagement.entity.Employee;
import com.employeemanagement.entity.EmployeeProfile;

public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, Long> {
	boolean existsByEmployeeId(Long employeeId);
	
	Optional<EmployeeProfile> findByEmployee(Employee employee);

}
