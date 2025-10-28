package com.employeemanagement.service;

import java.util.List;

import com.employeemanagement.dto.EmployeeDTO;

public interface EmployeeService {
	//Create a new employee
	EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
	
	//Retrieve an employee with given id
	EmployeeDTO getElementById(Long id);
	
	//Get all the employees present in the database.
	List<EmployeeDTO> getAllEmployee();
	
	//Update an existing employee.
	EmployeeDTO updateEmployee(Long id, EmployeeDTO updatedEmployee);
	
	//Delete Employee
	void deleteEmployee(Long id);
}
