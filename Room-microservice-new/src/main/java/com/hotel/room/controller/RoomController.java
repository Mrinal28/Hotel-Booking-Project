package com.hotel.room.controller;

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

import com.hotel.room.model.Room;
import com.hotel.room.service.RoomService;


@CrossOrigin(origins = "*")
@RestController
public class RoomController {

		@Autowired
		private RoomService service;
		
		@PostMapping("/rooms")
	    public Room addRoom(@RequestBody Room Room) {
	        return service.saveRoom(Room);
	    }
	    @GetMapping("/rooms")
	    public List<Room> findAllRooms() {
	        return service.getRooms();
	    }
	    
		@GetMapping("/roomsbyhid/{hid}")
	    public List<Room> findRoomsHid(@PathVariable int hid) {
	        return (List<Room>) service.getRoomsHid(hid);
	    }

	    @GetMapping("/rooms/{rid}")
	    public Room findRoomById(@PathVariable int rid) {
	        return service.getRoomById(rid);
	    }

	    @PutMapping("/rooms")
	    public Room updateRoom(@RequestBody Room Room) {
	        return service.updateRoom(Room);
	    }

	    @DeleteMapping("/rooms/{rid}")
	    public String deleteRoom(@PathVariable int rid) {
	        return service.deleteRoom(rid);
	    }
}
