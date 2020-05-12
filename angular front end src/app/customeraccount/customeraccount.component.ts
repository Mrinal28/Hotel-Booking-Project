import { Component, OnInit } from '@angular/core';
import { WebStorageService } from 'ngx-web-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customeraccount',
  templateUrl: './customeraccount.component.html',
  styleUrls: ['./customeraccount.component.css']
})
export class CustomeraccountComponent implements OnInit {

  id: any
  response: any;

  constructor(private storage: WebStorageService,
    private http: HttpClient) { }

  ngOnInit(): void {

  this.id = this.storage.session.get("user")
  console.log(this.id)
  this.searchForUser()

  }

  searchForUser() {
    this.http.get(`http://localhost:8020/customers/${this.id}`).subscribe((response) => {
      this.response = response;
     
    });

    console.log(this.response);

  }

}
