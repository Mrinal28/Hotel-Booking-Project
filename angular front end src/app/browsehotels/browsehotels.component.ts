
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-browsehotels',
  templateUrl: './browsehotels.component.html',
  styleUrls: ['./browsehotels.component.css'],
  providers:  [ ]
})


  
export class BrowsehotelsComponent implements OnInit {
  response: any;
  hotel:any;

  constructor(private router: Router,
    private httpRef: HttpClient
    
    ) { }

  ngOnInit(): void {
      this.listhotels()
  }

  listhotels(){
    let obs = this.httpRef.get("http://localhost:8025/hotels");
    obs.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  gotoroom(){
    this.router.navigate(['rooms'])
  }
}

