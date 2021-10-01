package com.yazilimprojem.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yazilimprojem.springboot.model.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Long>{
	
}
