package com.hotel.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.customer.model.Customer;
import com.hotel.customer.repo.CustomerRepo;


@Service
public class CustomerService {
	
	@Autowired
    private CustomerRepo repository;
	
	public Customer saveCustomer(Customer Customer) {
        return repository.save(Customer);
    }

    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    public Customer getCustomerById(int cid) {
        return repository.findById(cid).orElse(null);
    }

    public String deleteCustomer(int cid) {
        repository.deleteById(cid);
        return "Customer removed !! " + cid;
    }

    public Customer updateCustomer(Customer Customer) {
        Customer existingCustomer = repository.findById(Customer.getCid()).orElse(null);
        existingCustomer.setCname(Customer.getCname());
        existingCustomer.setCemail(Customer.getCemail());
        existingCustomer.setCpassword(Customer.getCpassword());
        existingCustomer.setCimage(Customer.getCimage());
        return repository.save(existingCustomer);
    }

	
}
