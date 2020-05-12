import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebStorageService } from 'ngx-web-storage';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  response: any;
  id: any;
  noguests: number;
  startdate: Date;
  enddate: any;
  rprice:any;
  findate:any;
  total:number;
  totals:any;
  custid: 1234;
  orderid: 2333;

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private storage: WebStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookroom();
  }

  bookroom(){
    this.http.get(`http://localhost:8026/rooms/${this.id}`).subscribe((response) => {
      this.response = response; 
      console.log(response);
    });

  }

  checkloc(){
    if(this.storage.session.get("user") == null){
      return true;
    }
    return false;
  // console.log(this.storage.session.get(this.id))
 }

  // saveHotel(){
  //   this.http.post(`http://localhost:8025/hotels/`, 
  //   {
  //     "hname" : this.hname,
  //   	"hlocation" : this.hlocation,
  //     "hrating" : this.hrating,
  //     "himage" : this.himage
  //   }).subscribe(
  //     data => { 
  //       console.log(data)
  //       this.router.navigate(['managehotels'])
  //     }
  //   )

   // }
  
   paymentconfirm(){
    window.location.href = `http://localhost:9090/`;
    // this.http.post(`http://localhost:9090/`, 
    // {
    //   "TXN_AMOUNT" : this.totals,
    //   "CUST_ID": this.custid,
    //   "ORDER_ID": this.orderid
    
    // }).subscribe(
    //   data => { 
    //     console.log(data)
    //    // window.location.href = 'http://localhost:9090/';
    //   }
    // )

   }


}
