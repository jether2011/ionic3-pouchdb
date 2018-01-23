//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(PouchDBFind);
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  public data:any;
  public db:any;
  public remote:any;

  constructor() {
    this.db = new PouchDB('user');
    //this.remote = 'http://localhost:5984/ionic-course';
    this.remote = 'http://35.226.143.118:8888/ionic-course';
    
    let options = {
      live:true,
      retry:true,
      continuous:true
    }

    this.db.sync(this.remote, options);
  }
  
  public searchUser(userName: string) {
    return this.db.find({
      selector: {
        name: { $regex: userName }
        // ,fields: ['name', 'age']
        // ,sort: ['name']
      }
    });
  }

  public createUser(user:any){
    this.db.post(user);
  }

  public updateUser(user:any){
    this.db.put(user).catch((err)=>{

    });
  }

  public deleteUser(user:any){
    this.db.remove(user);
  }

  public getUsers(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => this.db.allDocs({
        include_docs:true
      }).then((result)=>{
        this.data = [];
        let docs = result.rows.map((row)=>{
          this.data.push(row.doc);
        });

        resolve(this.data);

        this.db.changes({
          live:true,
          since:'now',
          include_docs: true
        }).on('change', (change)=>{
          this.handleChange(change);
        });
      })
    );
  }

  public handleChange(change:any){
    let changeDoc = null;
    let changeIndex = null;

    this.data.forEach((doc, index) => {
      if(doc._id === change.id){
        changeDoc = doc;
        changeIndex = index;
      }
    });

    if(change.deleted){
      this.data.splice(changeIndex, 1);
    } else {
      if(changeDoc){
        this.data[changeIndex] = change.doc;
      } else {
        this.data.push(change.doc);
      }
    }
  }
}
