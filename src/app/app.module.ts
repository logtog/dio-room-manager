import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';

import { CreateRoomComponent } from './component/create-room/create-room.component';
import { RoomDetailsComponent } from './component/room-details/room-details.component';
import { RoomListComponent } from './component/room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateRoomComponent } from './component/update-room/update-room.component';
import { AppComponent } from './component/app.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
