import { Component, Input, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

   
  constructor(private storage:Storage) {
    this.saveData()
    this.loadData()
   }

  ngOnInit() {
    this.storage.create();
  }

  saveData(){
    this.storage.set('Name',"Rahul");
  }
  loadData(){
      this.storage.get('Name').then((val)=>{
        console.log(val);
      });
    }
}
