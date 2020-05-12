import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  userName: string = "";

  response: any;
  key: 0;
  resproom: any;
  items=[];

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }
  searchForUser() {
    this.http.get("http://localhost:8025/hotels/" + this.userName).subscribe((response) => {
      this.response = response;
     
    });

    console.log(this.response);

  }
  

  
}
