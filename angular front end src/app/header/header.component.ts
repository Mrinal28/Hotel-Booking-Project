import { Component, OnInit } from '@angular/core';
import { WebStorageService } from 'ngx-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // id:string="NG_id";
  constructor(
    private storage: WebStorageService
  ) { }

  ngOnInit(): void {
    this.checkloc()
  }

 logout(){
    this.storage.session.clear();
    window.location.href = `http://localhost:4200/`;
  
   //console.log(this.storage.session.get("user"))


  }
  checkloc(){
     if(this.storage.session.get("user") == null){
       return true;
     }
     return false;
   // console.log(this.storage.session.get(this.id))
  }


}
