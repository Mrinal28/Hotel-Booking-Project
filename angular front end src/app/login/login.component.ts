import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebStorageService } from "ngx-web-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username: any;
 // usernames: "key";
  password: any
  response: any;
  response2: any;
  message: String;
  passwordadmin: 'admin';

  
  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: WebStorageService
  ) { }

  ngOnInit(): void {
  }

  searchForUser(username) {
    if(username=="admin" && this.password=="admin")
    {
      console.log('admin')
      this.storage.session.set("user", 'admin');
      window.location.href = `http://localhost:4200/admin-console`


    }else{
    this.http.get(`http://localhost:8020/customers/${username}`).subscribe((response) => {
      this.response = response;

     
    });
    console.log(this.response);
    //this.check()
    if(this.password===this.response.cpassword){
      console.log('comp')
      //var i= +username;
      // this.storage.session.set(this.usernames, this.response.username);
       //this.storage.local.set("user", i);
      //  console.log(this.response.cid)
       this.storage.session.set("user", this.response.cid);
       window.location.href = `http://localhost:4200`;
     }
  }
  }
  


}
