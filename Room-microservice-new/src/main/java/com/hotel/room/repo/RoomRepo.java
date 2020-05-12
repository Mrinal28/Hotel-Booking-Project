package com.hotel.room.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.room.model.Room;


public interface RoomRepo extends JpaRepository<Room, Integer>{

	List<Room> findByHid(int hid);
}
