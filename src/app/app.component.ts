import { Component, OnInit } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'schoolti';
firebaseConfig = {
  apiKey: "AIzaSyAc4tttdGuid9VPD9y72a0ADsmnjLshb9M",
  authDomain: "myapplication-92ded.firebaseapp.com",
  databaseURL: "https://myapplication-92ded.firebaseio.com",
  projectId: "myapplication-92ded",
  storageBucket: "myapplication-92ded.appspot.com",
  messagingSenderId: "9355270060",
  appId: "1:9355270060:web:dc3e9ce0f4d9500d110c09"
};

// Initialize Firebase

  constructor() {}

  ngOnInit() {
    //window.print(); 
    const app = initializeApp(this.firebaseConfig);
    console.info('message', { message: 'init app' });
  }
}
