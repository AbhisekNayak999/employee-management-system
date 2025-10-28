package com.employeemanagement.service;


import com.employeemanagement.dto.EmployeeProfileDTO;

import jakarta.validation.Valid;

public interface EmployeeProfileService {
	// Create a profile
	EmployeeProfileDTO createProfile(Long id, EmployeeProfileDTO empdto);

	// Get profile info
	EmployeeProfileDTO getProfileById(Long id);

	// Update profile info
	EmployeeProfileDTO updateProfile(Long id, EmployeeProfileDTO empdto);

	// Delete profile
	void deleteProfile(Long id);

	//Check whether a profile exists or not
	boolean existsByEmployeeId(Long employeeId);

	EmployeeProfileDTO getProfileByEmployeeId(Long employeeId);

	EmployeeProfileDTO updateProfileByEmployeeId(Long employeeId, @Valid EmployeeProfileDTO empdto);
}
