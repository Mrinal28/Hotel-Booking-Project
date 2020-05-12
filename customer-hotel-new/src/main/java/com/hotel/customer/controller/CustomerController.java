package com.hotel.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.customer.model.Customer;
import com.hotel.customer.service.CustomerService;;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	@PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer Customer) {
        return service.saveCustomer(Customer);
    }
    @GetMapping("/customers")
    public List<Customer> findAllCustomers() {
        return service.getCustomers();
    }

    @GetMapping("/customers/{cid}")
    public Customer findCustomerById(@PathVariable int cid) {
        return service.getCustomerById(cid);
    }

    @PutMapping("/customers")
    public Customer updateCustomer(@RequestBody Customer Customer) {
        return service.updateCustomer(Customer);
    }

    @DeleteMapping("/customers/{cid}")
    public String deleteCustomer(@PathVariable int cid) {
        return service.deleteCustomer(cid);
    }
}
