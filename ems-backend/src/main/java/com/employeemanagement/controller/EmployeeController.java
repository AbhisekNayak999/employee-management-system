package com.employeemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.employeemanagement.dto.EmployeeDTO;
import com.employeemanagement.service.EmployeeProfileService;
import com.employeemanagement.service.EmployeeService;

@ControllerAdvice
@CrossOrigin("*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	EmployeeProfileService employeeProfileService;

	@Autowired
	private EmployeeService employeeService;

	
	/* 
	 * Create profile
	 */
	

	//Build Add Employee Rest API
	@PostMapping("/addEmployee")
	public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO empdto){
		EmployeeDTO savesEmployee =  employeeService.createEmployee(empdto);
		return new ResponseEntity<EmployeeDTO>(savesEmployee, HttpStatus.CREATED);
	}
	
	
	/* 
	 * Get profile
	 */


	//Build get employee by id
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeDTO> getEmpById(@PathVariable Long id){
		EmployeeDTO emp = employeeService.getElementById(id);
		return ResponseEntity.ok(emp);
	}
	
	
	/* 
	 * Get All profiles
	 */


	//Build Get all employee API
	@GetMapping("/getAllEmployee")
	public ResponseEntity<List<EmployeeDTO>> getAllEmployee(){
		List<EmployeeDTO> employees = employeeService.getAllEmployee();
		return ResponseEntity.ok(employees);
	}
	
	
	/* 
	 * Update profile
	 */
	
	//Build update method
	@PutMapping("/{id}")
	public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDTO emp){
		EmployeeDTO empdto = employeeService.updateEmployee(id, emp);
		return ResponseEntity.ok(empdto);
	}
	
	
	/* 
	 * Delete profile
	 */
	//Build API for deleting employee
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Employee successfully deleted");
	}
}












