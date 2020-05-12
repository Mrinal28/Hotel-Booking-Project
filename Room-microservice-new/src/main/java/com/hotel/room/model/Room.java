package com.hotel.room.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Room {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rid;
	private int hid;
	private String rsize;
	private String rprice;
	private String rimage;
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public String getRsize() {
		return rsize;
	}
	public void setRsize(String rsize) {
		this.rsize = rsize;
	}
	public String getRprice() {
		return rprice;
	}
	public void setRprice(String rprice) {
		this.rprice = rprice;
	}
	public String getRimage() {
		return rimage;
	}
	public void setRimage(String rimage) {
		this.rimage = rimage;
	}
	@Override
	public String toString() {
		return "Room [rid=" + rid + ", hid=" + hid + ", rsize=" + rsize + ", rprice=" + rprice + ", rimage=" + rimage
				+ "]";
	}
	
	
	
	

}
