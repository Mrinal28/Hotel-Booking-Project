package com.hotel.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotel.model.Hotel;
import com.hotel.hotel.repo.HotelRepo;


@Service
public class HotelService {
	
	@Autowired
    private HotelRepo repository;
	
	public Hotel saveHotel(Hotel Hotel) {
        return repository.save(Hotel);
    }

    public List<Hotel> getHotels() {
        return repository.findAll();
    }

    public Hotel getHotelById(int hid) {
        return repository.findById(hid).orElse(null);
    }

    public String deleteHotel(int hid) {
        repository.deleteById(hid);
        return "Hotel removed !! " + hid;
    }

    public Hotel updateHotel(Hotel Hotel) {
        Hotel existingHotel = repository.findById(Hotel.getHid()).orElse(null);
        existingHotel.setHname(Hotel.getHname());
        existingHotel.setHlocation(Hotel.getHlocation());
        existingHotel.setHimage(Hotel.getHimage());
        existingHotel.setHrating(Hotel.getHrating());
       return repository.save(existingHotel);
        
    }


}
