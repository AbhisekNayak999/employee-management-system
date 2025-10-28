package com.employeemanagement.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "profile")
public class EmployeeProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	@Column(name = "joinDate", nullable = false)
	private LocalDate joinDate;


	@Column(name = "jobProfile", nullable = false)
	private String jobProfile;

	@Column(name = "department", nullable = false)
	private String department;

	@Column(name = "ctc")
	private String ctc;

	@Column(name = "shift")
	private String shifting;

	@Column(name = "nationality")
	private String nationality;
	
//	Foreign key from employee table
	@JsonBackReference
	@OneToOne(fetch = FetchType.LAZY)   
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JoinColumn(name = "employee_id", referencedColumnName = "id") 
    private Employee employee;  
}








