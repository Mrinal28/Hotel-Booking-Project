import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roomupdate',
  templateUrl: './roomupdate.component.html',
  styleUrls: ['./roomupdate.component.css']
})
export class RoomupdateComponent implements OnInit {

  rsize: any;
  rprice: any;
  rimage: any;
  rhid:any;

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rhid = this.route.snapshot.params['id'];
    console.log(this.rhid)

  }
  saveRoom(){  
    this.http.post(`http://localhost:8026/rooms/`, 
    {
      "rsize" : this.rsize,
      "hid": this.rhid,
    	"rprice" : this.rprice,
      "rimage" : this.rimage
    }).subscribe(
      data => { 
        console.log(data)
        this.router.navigate(['managehotels'])
      }
    )

  }

}
