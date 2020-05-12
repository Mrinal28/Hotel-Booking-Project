import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowsehotelsComponent } from './browsehotels/browsehotels.component';
import { BrowseroomComponent } from './browseroom/browseroom.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { HotelDetailsComponent } from './admin/hotel-details/hotel-details.component';
import { CustomerupdateComponent } from './admin/customer-details/customerupdate/customerupdate.component';
import { HotelupdateComponent } from './admin/hotel-details/hotelupdate/hotelupdate.component';
import { HoteladdComponent } from './admin/hotel-details/hoteladd/hoteladd.component';
import { RoomDetailsComponent } from './admin/hotel-details/room-details/room-details/room-details.component';
import { RoomaddComponent } from './admin/hotel-details/room-details/roomadd/roomadd.component';
import { RoomupdateComponent } from './admin/hotel-details/room-details/roomupdate/roomupdate.component';
import { CustomeraccountComponent } from './customeraccount/customeraccount.component';
import { WebStorageModule } from "ngx-web-storage";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    BrowsehotelsComponent,
    BrowseroomComponent,
    BookRoomComponent,
    AdminConsoleComponent,
    CustomerDetailsComponent,
    HotelDetailsComponent,
    CustomerupdateComponent,
    HotelupdateComponent,
    HoteladdComponent,
    RoomDetailsComponent,
    RoomaddComponent,
    RoomupdateComponent,
    CustomeraccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WebStorageModule.forRoot()

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
