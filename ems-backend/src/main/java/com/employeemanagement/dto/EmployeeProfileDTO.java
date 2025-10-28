package com.employeemanagement.dto;

import java.time.LocalDate;
//import java.util.List;

import com.employeemanagement.entity.Employee;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class EmployeeProfileDTO {
	private Long id;
	
	private LocalDate joinDate;

	private String jobProfile;

	private String department;
	
	private String ctc;
	
	private String shifting;

	private String nationality;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Employee emp;
}