import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { FriendsDetailsComponent } from './friends-details/friends-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    StartComponent,
    FriendsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
