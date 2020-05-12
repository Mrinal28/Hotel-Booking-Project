import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hoteladd',
  templateUrl: './hoteladd.component.html',
  styleUrls: ['./hoteladd.component.css']
})
export class HoteladdComponent implements OnInit {
  
  hname: any;
  hlocation: any;
  himage: any;
  hrating: any;


  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveHotel(){
    this.http.post(`http://localhost:8025/hotels/`, 
    {
      "hname" : this.hname,
    	"hlocation" : this.hlocation,
      "hrating" : this.hrating,
      "himage" : this.himage
    }).subscribe(
      data => { 
        console.log(data)
        this.router.navigate(['managehotels'])
      }
    )

  }

}
