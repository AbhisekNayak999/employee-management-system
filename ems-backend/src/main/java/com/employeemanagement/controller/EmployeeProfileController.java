package com.employeemanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.dto.EmployeeProfileDTO;
import com.employeemanagement.service.EmployeeProfileService;

import jakarta.validation.Valid;

@ControllerAdvice
@CrossOrigin("*")
@RestController
@RequestMapping("/profiles")
public class EmployeeProfileController {

	
	@Autowired
	private EmployeeProfileService employeeProfileService;

	
	/* 
	 * Create profile
	 */
	

	// Create a new employee profile
	@PostMapping("/{id}")
	public ResponseEntity<EmployeeProfileDTO> createProfile(@PathVariable Long id, @Valid @RequestBody EmployeeProfileDTO empdto) {
		
		EmployeeProfileDTO saveProfile = employeeProfileService.createProfile(id, empdto);

		return ResponseEntity.ok(saveProfile);
	}
	
	
	/* 
	 * Get profile
	 */

	
	// Get an employee
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeProfileDTO> getProfile(@PathVariable Long id) {
		EmployeeProfileDTO emp = employeeProfileService.getProfileById(id);
		
		return ResponseEntity.ok(emp);
	}
	
	
	/* 
	 * Update profile
	 */
	

	// Update an employee
	@PutMapping("/{id}")
	public ResponseEntity<EmployeeProfileDTO> updateProfile(@PathVariable Long id,
			@Valid @RequestBody EmployeeProfileDTO empdto) {
		EmployeeProfileDTO emp = employeeProfileService.updateProfile(id, empdto);

		return ResponseEntity.ok(emp);
	}
	
	
	/* 
	 * Delete profile
	 */

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUpdate(@PathVariable Long id) {
		employeeProfileService.deleteProfile(id);

		return ResponseEntity.ok("Information Successfully Deleted");
	}
	
	/*
	 * Checks whether a profile with corresponding id exists or not
	 */
	
	@GetMapping("/exists/{employeeId}")
	public ResponseEntity<Boolean> profileExists(@PathVariable Long employeeId) {
	    boolean exists = employeeProfileService.existsByEmployeeId(employeeId);
	    return ResponseEntity.ok(exists);
	}
	
	
	@GetMapping("/employee/{employeeId}")
	public ResponseEntity<EmployeeProfileDTO> getProfileByEmployeeId(@PathVariable Long employeeId) {
	    EmployeeProfileDTO profile = employeeProfileService.getProfileByEmployeeId(employeeId);
	    return ResponseEntity.ok(profile);
	}
	
	
	@PutMapping("/employee/{employeeId}")
	public ResponseEntity<EmployeeProfileDTO> updateProfileByEmployeeId(
	        @PathVariable Long employeeId,
	        @Valid @RequestBody EmployeeProfileDTO empdto) {
	    
	    EmployeeProfileDTO updatedProfile = employeeProfileService.updateProfileByEmployeeId(employeeId, empdto);
	    return ResponseEntity.ok(updatedProfile);
	}



}
