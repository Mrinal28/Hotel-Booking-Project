package com.hotel.hotel.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.hotel.model.Hotel;


public interface HotelRepo extends JpaRepository<Hotel, Integer>{

}
