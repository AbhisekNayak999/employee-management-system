package com.employeemanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.employeemanagement.dto.EmployeeProfileDTO;
import com.employeemanagement.entity.Employee;
import com.employeemanagement.entity.EmployeeProfile;
import com.employeemanagement.exception.ResourceNotFoundException;
import com.employeemanagement.mapper.EmployeeMapper;
import com.employeemanagement.repository.EmployeeProfileRepository;
import com.employeemanagement.repository.EmployeeRepository;

import jakarta.transaction.Transactional;

@Service
public class EmployeeProfileServiceIMPL implements EmployeeProfileService {

    @Autowired
    EmployeeRepository employeeRepo;

    @Autowired
    EmployeeProfileRepository employeeProfileRepository;

    private Employee getEmployeeById(Long id) {
        return employeeRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("No employee with given id"));
    }

    @Override
    public EmployeeProfileDTO createProfile(Long id, EmployeeProfileDTO empdto) {
    	
//    	System.out.println(empdto.getJoinDate());
//    	System.out.println(empdto.getJobProfile());
//    	System.out.println(empdto.getDepartment());
//    	System.out.println(empdto.getCtc());
//    	System.out.println(empdto.getShifting());
//    	System.out.println(empdto.getNationality());
    	
    	
        EmployeeProfile profile = EmployeeMapper.mapToEmployeeProfile(empdto);
        Employee emp = getEmployeeById(id);
        profile.setEmployee(emp);
        EmployeeProfile saved = employeeProfileRepository.save(profile);
        return EmployeeMapper.mapToEmployeeProfileDTO(saved);
    }

    @Override
    public EmployeeProfileDTO getProfileById(Long id) {
        EmployeeProfile profile = employeeProfileRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("No element found with given id"));
        return EmployeeMapper.mapToEmployeeProfileDTO(profile);
    }

    @Override
    public EmployeeProfileDTO updateProfile(Long id, EmployeeProfileDTO empdto) {
        EmployeeProfile profile = employeeProfileRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));

        profile.setCtc(empdto.getCtc());
        profile.setDepartment(empdto.getDepartment());
        profile.setJobProfile(empdto.getJobProfile());
        profile.setJoinDate(empdto.getJoinDate());
        profile.setNationality(empdto.getNationality());
        profile.setShifting(empdto.getShifting());

        EmployeeProfile updated = employeeProfileRepository.save(profile);
        return EmployeeMapper.mapToEmployeeProfileDTO(updated);
    }

    @Transactional
    @Override
    public void deleteProfile(Long id) {
        EmployeeProfile profile = employeeProfileRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Profile not found"));
        if (profile.getEmployee() != null) {
            profile.getEmployee().setProfile(null);
            profile.setEmployee(null);
        }
        employeeProfileRepository.delete(profile);
    }
    
    
    //FOLLOWING MATHODS ARE REQUIRED BY REACT

	@Override
	public boolean existsByEmployeeId(Long employeeId) {
		
		return employeeProfileRepository.existsByEmployeeId(employeeId);
	}
	
	@Override
	public EmployeeProfileDTO getProfileByEmployeeId(Long employeeId) {
	    Employee emp = employeeRepo.findById(employeeId)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));

	    EmployeeProfile profile = employeeProfileRepository.findByEmployee(emp)
	        .orElseThrow(() -> new ResourceNotFoundException("Profile not found for employee ID: " + employeeId));

	    return EmployeeMapper.mapToEmployeeProfileDTO(profile);
	}
	
	
	@Override
	public EmployeeProfileDTO updateProfileByEmployeeId(Long employeeId, EmployeeProfileDTO empdto) {
	    Employee employee = employeeRepo.findById(employeeId)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));

	    EmployeeProfile profile = employeeProfileRepository.findByEmployee(employee)
	        .orElseThrow(() -> new ResourceNotFoundException("Profile not found for employee ID: " + employeeId));

	    profile.setCtc(empdto.getCtc());
	    profile.setDepartment(empdto.getDepartment());
	    profile.setJobProfile(empdto.getJobProfile());
	    profile.setJoinDate(empdto.getJoinDate());
	    profile.setNationality(empdto.getNationality());
	    profile.setShifting(empdto.getShifting());

	    EmployeeProfile updated = employeeProfileRepository.save(profile);
	    return EmployeeMapper.mapToEmployeeProfileDTO(updated);
	}


}













