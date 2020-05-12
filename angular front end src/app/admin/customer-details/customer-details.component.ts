import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Customer{
  constructor(
    public cid: number,
    public cname: string,
    public cemail: string,
    public cphoneno: string,
    public cpassword: string,
    public cimage: string  
  ){
  }
}


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  response: any;
  message: String;

  customer : Customer[]

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForUser();
  }

  searchForUser() {
    this.http.get("http://localhost:8020/customers").subscribe((response) => {
      this.response = response;
     
    });

    console.log(this.response);

  }

  updateCustomer(id){
    this.router.navigate(['updatecustomer', id])

  }
  deleteCustomer(id){
    this.message = `Delete of ${id} Successful`;
    this.http.delete(`http://localhost:8020/customers/${id}`).subscribe((response) => {
      
    });
    this.router.navigate(['managecustomers'])
  }
}
