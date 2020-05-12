package com.hotel.hotel.controller;

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

import com.hotel.hotel.model.Hotel;
import com.hotel.hotel.service.HotelService;


@CrossOrigin(origins = "*")
@RestController
public class HotelController {
	
	@Autowired
	private HotelService service;
	
	@PostMapping("/hotels")
    public Hotel addHotel(@RequestBody Hotel Hotel) {
        return service.saveHotel(Hotel);
    }
    @GetMapping("/hotels")
    public List<Hotel> findAllHotels() {
        return service.getHotels();
    }

    @GetMapping("/hotels/{hid}")
    public Hotel findHotelById(@PathVariable int hid) {
        return service.getHotelById(hid);
    }

    @PutMapping("/hotels")
    public Hotel updateHotel(@RequestBody Hotel Hotel) {
        return service.updateHotel(Hotel);
    }

    @DeleteMapping("/hotels/{hid}")
    public String deleteHotel(@PathVariable int hid) {
        return service.deleteHotel(hid);
    }

}
