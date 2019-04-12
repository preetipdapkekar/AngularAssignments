import { Component, OnInit } from '@angular/core';
import { FRIENDS } from '../mock-friends';
import { Friend } from '../friend';
import { MainService } from '../main.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  friends: Friend[];
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.loadFriends();
  }
  loadFriends(){
   this.friends = this.mainService.getFriends();
   }
   
}
