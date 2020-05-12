
import { CustomeraccountComponent } from './customeraccount/customeraccount.component';
import { RoomaddComponent } from './admin/hotel-details/room-details/roomadd/roomadd.component';
import { RoomupdateComponent } from './admin/hotel-details/room-details/roomupdate/roomupdate.component';
import { RoomDetailsComponent } from './admin/hotel-details/room-details/room-details/room-details.component';
import { HoteladdComponent } from './admin/hotel-details/hoteladd/hoteladd.component';
import { HotelupdateComponent } from './admin/hotel-details/hotelupdate/hotelupdate.component';
import { CustomerupdateComponent } from './admin/customer-details/customerupdate/customerupdate.component';
import { HotelDetailsComponent } from './admin/hotel-details/hotel-details.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { BrowseroomComponent } from './browseroom/browseroom.component';
import { BrowsehotelsComponent } from './browsehotels/browsehotels.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoomComponent } from './book-room/book-room.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component: LoginComponent},

  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'browse', component: BrowsehotelsComponent},
  {path: 'rooms/:hid', component: BrowseroomComponent},
  {path: 'book/:id', component: BookRoomComponent},
  {path: 'admin-console', component: AdminConsoleComponent},
  {path: 'managecustomers', component: CustomerDetailsComponent},
  {path: 'managehotels', component: HotelDetailsComponent},
  {path: 'updatecustomer/:id', component: CustomerupdateComponent},
  {path: 'updatehotel/:id', component: HotelupdateComponent},
  {path: 'addhotel', component: HoteladdComponent},
  {path: 'myaccount', component: CustomeraccountComponent},

  {path: 'managerooms/:id', component: RoomDetailsComponent},
  {path: 'updateroom/:id', component: RoomupdateComponent},
  {path: 'addroom/:id', component: RoomaddComponent},

  

  {path: '**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
