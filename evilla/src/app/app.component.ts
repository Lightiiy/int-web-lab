import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcZLw351JYfpvDPANAHtNAwDh5EIYameg",
  authDomain: "piwo-evilla.firebaseapp.com",
  projectId: "piwo-evilla",
  storageBucket: "piwo-evilla.appspot.com",
  messagingSenderId: "286604942844",
  appId: "1:286604942844:web:43821fcda52ff2c9a0a679",
  measurementId: "G-M6ESL8MXZ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private api: ApiService){}

  title = 'evilla';

  ngOnInit() {
    this.api.getHouseOfferingsFromApi$().subscribe( test => console.log(test));
    this.api.getAuthorsFromApi$().subscribe( test => console.log(test));
  }
}
