import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyAP3xkN39JhGwuuZodji5_OJcqL6v0XUYo",
      authDomain: "myangular-blog-fafa3.firebaseapp.com",
      databaseURL: "https://myangular-blog-fafa3.firebaseio.com",
      projectId: "myangular-blog-fafa3",
      storageBucket: "",
      messagingSenderId: "146891768933",
      appId: "1:146891768933:web:1ac2adad4754594c"
    };
    firebase.initializeApp(config);
  }
}
