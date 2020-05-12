import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: any
  password: any
  email: any
  phoneno : any
  image: "/assets/c1.png"

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  handleLogin(){
    this.http.post(`http://localhost:8020/customers`, 
    {
      "cname" : this.username,
    	"cemail" : this.email,
      "cphoneno" : this.phoneno,
      "cpassword" : this.password,
      "cimage":  this.image
    }).subscribe(
      data => { 
        console.log(data)  
      }
    )
   window.location.href = `http://localhost:4200/login`;
   

  }
}
