import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotelupdate',
  templateUrl: './hotelupdate.component.html',
  styleUrls: ['./hotelupdate.component.css']
})
export class HotelupdateComponent implements OnInit {
  id: any;
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
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  saveHotel(){
    this.http.post(`http://localhost:8025/hotels/`, 
    {
      "hid": this.id,
      "hname":this.hname,
    	"hlocation":this.hlocation,
      "hrating":this.hrating,
      "himage":this.himage
    }).subscribe(
      data => { 
        console.log(data)
        this.router.navigate(['managehotels'])
      }
    )

  }

}
