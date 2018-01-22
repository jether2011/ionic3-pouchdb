import { UserProvider } from "./../../providers/user/user";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: any;
  public user = {name:"", age:""};

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.loadUsers();
  }

  public loadUsers() {
    this.userProvider.getUsers().then((data)=>{
      this.users = data;
    });
  }

  public edit(user){
    this.user = user;
  }

  public delete(user){
    this.userProvider.deleteUser(user);
  }

  public saveUser() {
      this.userProvider.createUser(this.user);
  };

}
