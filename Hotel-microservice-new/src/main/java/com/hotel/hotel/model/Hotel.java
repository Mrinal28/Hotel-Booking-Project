package com.hotel.hotel.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hotel{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int hid;
	private String hname;
	private String hlocation;
	private String himage;
	private int hrating;
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public String getHlocation() {
		return hlocation;
	}
	public void setHlocation(String hlocation) {
		this.hlocation = hlocation;
	}
	public String getHimage() {
		return himage;
	}
	public void setHimage(String himage) {
		this.himage = himage;
	}
	public int getHrating() {
		return hrating;
	}
	public void setHrating(int hrating) {
		this.hrating = hrating;
	}
	@Override
	public String toString() {
		return "Hotel [hid=" + hid + ", hname=" + hname + ", hlocation=" + hlocation + ", himage=" + himage
				+ ", hrating=" + hrating + "]";
	}
	
}