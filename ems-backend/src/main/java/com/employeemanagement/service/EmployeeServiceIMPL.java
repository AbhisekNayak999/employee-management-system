package com.employeemanagement.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemanagement.dto.EmployeeDTO;
import com.employeemanagement.entity.Employee;
import com.employeemanagement.exception.ResourceNotFoundException;
import com.employeemanagement.mapper.EmployeeMapper;
import com.employeemanagement.repository.EmployeeRepository;

import jakarta.transaction.Transactional;


@Service
public class EmployeeServiceIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee saved = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(saved);
    }

    @Override
    public EmployeeDTO getElementById(Long id) {
        Employee emp = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        return EmployeeMapper.mapToEmployeeDTO(emp);
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        return employeeRepository.findAll()
            .stream()
            .map(EmployeeMapper::mapToEmployeeDTO)
            .collect(Collectors.toList());
    }
    
    /*
     * 
     * Saw a question on YouTube asked in a mock interview, so I was just implementing the question without using JPQL.
     * 
     * 
	    @Override
	    public List<EmployeeDTO> getAllEmployee() {
	        List<Employee> employees =  employeeRepository.findAll()
	            .stream()
	            .filter((employee) -> employee.getId() > 5)
	            .collect(Collectors.toList());
	            
	        return employees.stream().map(EmployeeMapper::mapToEmployeeDTO).collect(Collectors.toList());
	    }
	*/
    @Override
    @Transactional
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO updatedEmployee) {
        Employee emp = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        emp.setFirstName(updatedEmployee.getFirstName());
        emp.setLastName(updatedEmployee.getLastName());
        emp.setEmail(updatedEmployee.getEmail());
        return EmployeeMapper.mapToEmployeeDTO(emp);
    }

    @Override
    @Transactional
    public void deleteEmployee(Long id) {
        Employee emp = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        if (emp.getProfile() != null) {
            emp.getProfile().setEmployee(null);
            emp.setProfile(null);
        }

        employeeRepository.delete(emp);
    }
}



























