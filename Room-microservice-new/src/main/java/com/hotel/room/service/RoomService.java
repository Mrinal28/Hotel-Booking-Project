package com.hotel.room.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.room.model.Room;
import com.hotel.room.repo.RoomRepo;



@Service
public class RoomService {

	@Autowired
    private RoomRepo repository;
	
	public Room saveRoom(Room Room) {
        return repository.save(Room);
    }

    public List<Room> getRooms() {
        return repository.findAll();
    }

    public Room getRoomById(int rid) {
        return repository.findById(rid).orElse(null);
    }

    public String deleteRoom(int rid) {
        repository.deleteById(rid);
        return "Room removed !! " + rid;
    }
    
    public List<Room> getRoomsHid(int hid){
    	return repository.findByHid(hid);
    }

    public Room updateRoom(Room Room) {
        Room existingRoom = repository.findById(Room.getRid()).orElse(null);
        existingRoom.setHid(Room.getHid());
        existingRoom.setRsize(Room.getRsize());
        existingRoom.setRprice(Room.getRprice());
        existingRoom.setRimage(Room.getRimage());
        return repository.save(existingRoom);
    }
    
}
