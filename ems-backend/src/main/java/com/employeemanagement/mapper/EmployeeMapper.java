package com.employeemanagement.mapper;

import com.employeemanagement.dto.EmployeeDTO;
import com.employeemanagement.dto.EmployeeProfileDTO;
import com.employeemanagement.entity.Employee;
import com.employeemanagement.entity.EmployeeProfile;

public class EmployeeMapper {
	public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
		return new EmployeeDTO(
					employee.getId(),
					employee.getFirstName(),
					employee.getLastName(),
					employee.getEmail(),
					employee.getProfile()
				);
	}
	
	public static Employee mapToEmployee(EmployeeDTO empdto) {
		return new Employee(
					empdto.getId(),
					empdto.getFirstName(),
					empdto.getLastName(),
					empdto.getEmail(),
					empdto.getEmployeeProfile()
				);
	}
	
	public static EmployeeProfile mapToEmployeeProfile(EmployeeProfileDTO empdto) {
		return new EmployeeProfile(
					empdto.getId(),
					empdto.getJoinDate(),
					empdto.getJobProfile(),
					empdto.getDepartment(),
					empdto.getCtc(),
					empdto.getShifting(),
					empdto.getNationality(), 
					empdto.getEmp()
				);
	}
	
	public static EmployeeProfileDTO mapToEmployeeProfileDTO(EmployeeProfile emp) {
		return new EmployeeProfileDTO(
				emp.getId(),
				emp.getJoinDate(),
				emp.getJobProfile(),
				emp.getDepartment(),
				emp.getCtc(),
				emp.getShifting(),
				emp.getNationality(),
				emp.getEmployee()
				);
	}
}
