import { User } from "./../../entity/User"
import { UserProvider } from "./../../providers/user/user";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Geolocation, Camera, Dialogs]
})
export class HomePage {

  public users: any;
  public user = new User();
  public options: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController, public userProvider: UserProvider,
    private geolocation: Geolocation,
    private camera:Camera,
    private dialog:Dialogs
  ) {
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
    this.geolocation.getCurrentPosition().then((resp) => {      
      this.user.latitude = resp.coords.latitude;
      this.user.longitude = resp.coords.longitude;      
      this.dialog.alert('User created!');
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     this.userProvider.createUser(this.user);
  };

  public uploadImagem(){    
    this.camera.getPicture(this.options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.user.picture = base64Image;
     this.dialog.alert('Upload done!');
    }, (err) => {
      console.log(err);
    });
  }

}
