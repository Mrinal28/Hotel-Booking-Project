import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  response: any;
  message: String;
  id: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForHotel();
  }

  searchForHotel() {
    this.http.get("http://localhost:8025/hotels").subscribe((response) => {
      this.response = response; 
    });
    console.log(this.response);
  }

  updateHotel(id){
    this.router.navigate(['updatehotel', id])

  }
  deleteHotel(id){
    this.router.navigate(['managehotels'])  
    this.message = `Delete of ${id} Successful`;
    this.http.delete(`http://localhost:8025/hotels/${id}`).subscribe((response) => {
     
      
    });

  }
  addHotel(){
    this.router.navigate(['addhotel'])

  }
  manageRooms(id){
    this.router.navigate(['managerooms',id])
  }
  
}
