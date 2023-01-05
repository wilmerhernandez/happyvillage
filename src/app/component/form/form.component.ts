import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
//import * as mercadopago from "mercadopag";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() { 

  }


  writeUserData(userId: string, name: any, email: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
  }
  ngOnInit(): void {
    
  }

  onsubmit(){
    this.writeUserData("11","rafael","hola@gmail.com");
  }

}
