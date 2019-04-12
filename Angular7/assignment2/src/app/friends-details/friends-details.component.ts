import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { Friend } from '../friend';
import { Location } from '@angular/common'

@Component({
  selector: 'app-friends-details',
  templateUrl: './friends-details.component.html',
  styleUrls: ['./friends-details.component.css']
})
export class FriendsDetailsComponent implements OnInit {
friend: Friend;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFriendsDetails();
  }

  getFriendsDetails(){
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
   this.mainService.getFriendDetail(id).
   subscribe(friend => this.friend = friend);
  }

  goBack(){
    this.location.back();
  }
}
