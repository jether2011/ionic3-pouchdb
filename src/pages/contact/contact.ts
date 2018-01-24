import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from "./../../providers/user/user";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public users:any;

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.loadUsers();
  }

  public searchUser(event) {
    this.userProvider.searchUser(event).then(result => this.users = result.docs);
  }

  public loadUsers(){
    this.userProvider.getUsers().then((data)=>{
      this.users = data;
    });
  }

  public doRefresh(refresher) {
    //console.log('Begin async operation', refresher);
    this.loadUsers();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
}
