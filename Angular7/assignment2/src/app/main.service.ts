import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { FRIENDS } from './mock-friends';
import { Friend } from './friend';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
friend: Friend;

  constructor(
    private location: Location
  ) { }

  addFriend(name: string, id: number){
    FRIENDS.push({id: id, name: name});
    
   this.location.back();
  }

  getFriends(){
    console.log(FRIENDS)
    return FRIENDS;
  }

  getFriendDetail(id: number){
      return of(FRIENDS.find(friend => friend.id === id))
  }
}
