package com.hotel.customer.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.customer.model.Customer;


public interface CustomerRepo extends JpaRepository<Customer, Integer>{

}
