import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  response: any;
  message: String;
  id: any;
  id2:any;

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.searchForHotel();
  }

  searchForHotel() {
    this.http.get("http://localhost:8026/roomsbyhid/"+this.id).subscribe((response) => {
      this.response = response; 
    });
    console.log(this.response);
  }

  updateHotel(id2){
    this.router.navigate(['updateroom', id2])

  }
  deleteHotel(id2){ 
    this.message = `Delete of ${id2} Successful`;
    this.http.delete(`http://localhost:8026/rooms/${id2}`).subscribe((response) => {
      this.searchForHotel();
      
    });

  }
  addHotel(){
    this.router.navigate(['addroom', this.id])

  }

}
