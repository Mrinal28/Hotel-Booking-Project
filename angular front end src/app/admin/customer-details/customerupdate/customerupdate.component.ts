import { Customer } from './../customer-details.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {
  id: any;
  customer: Customer;
  cname: any;
  cemail: any;
  cphoneno: any;


  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  saveCustomer(){
    this.http.post(`http://localhost:8020/customers/`, 
    {
      "cid": this.id,
      "cname":this.cname,
    	"cemail":this.cemail,
      "cphoneno":this.cphoneno
    }).subscribe(
      data => { 
        console.log(data)
        this.router.navigate(['managecustomers'])
      }
    )

  }
}
