import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { StartComponent } from './start/start.component';
import { FriendsDetailsComponent } from './friends-details/friends-details.component';

const routes: Routes = [
  { path : '', component:StartComponent},
  { path : 'friends', component:FriendsComponent},
  {path : 'details/:id', component:FriendsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
