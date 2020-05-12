import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebStorageService } from 'ngx-web-storage';

@Component({
  selector: 'app-browseroom',
  templateUrl: './browseroom.component.html',
  styleUrls: ['./browseroom.component.css']
})
export class BrowseroomComponent implements OnInit {
  hotelid: any;
  response: any;

  constructor(private route: ActivatedRoute,
    private httpRef: HttpClient,
    private router: Router,
    private storage: WebStorageService
    ) { }

  ngOnInit(): void {
    this.listrooms()
  }

  listrooms(){
    this.hotelid= this.route.snapshot.params['hid']
    let obs = this.httpRef.get("http://localhost:8026/roomsbyhid/"+this.hotelid);
    obs.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  checkloc(){
    if(this.storage.session.get("user") == null){
      this.router.navigate(['login'])
      return true;
      
    }
    return false;
  // console.log(this.storage.session.get(this.id))
 }
 dobook(){
  this.router.navigate(['book', this.hotelid])
 }




}
