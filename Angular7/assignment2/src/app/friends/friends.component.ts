import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Location } from '@angular/common';
import { MainService } from '../main.service';
import { FRIENDS } from '../mock-friends';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
friends: Friend[];
newFriend: string;
  constructor(
    private location: Location,
    private mainService: MainService) { }

  ngOnInit() {
  }

  loadFriends(){
   // this.friends
  }

  goBack(){
    this.location.back();
  }

  addFriend(name: string){
    const id:number = FRIENDS.length +1;
    this.mainService.addFriend(name,id);
   
  }

}
