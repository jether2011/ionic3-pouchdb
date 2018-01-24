/**
 * https://ionicframework.com/docs/components/#sliding-list
 * https://ionicframework.com/docs/developer-resources/forms/
 * http://35.226.143.118:8888/_utils/fauxton/#/database/ionic-course/_all_docs?limit=20
 */

import { User } from "./../../entity/User"
import { UserProvider } from "./../../providers/user/user";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Geolocation, Camera, Dialogs]
})
export class HomePage {
  private form : FormGroup;
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
    private dialog:Dialogs,
    private formBuilder: FormBuilder
  ) {
    this.loadUsers();
    // this.form = this.formBuilder.group({
    //   name: [''],
    //   age: [''],
    // });
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
      this.userProvider.createUser(this.user);   
      this.dialog.alert('User created!');
      this.user = new User();
     }).catch((error) => {
       console.log('Error getting location', error);
     });
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
