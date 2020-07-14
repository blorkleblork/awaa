import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awaa';


  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBJt8cLy_IXxgTw4iRK3GjkdESUCJf6paY",
      authDomain: "awaa-a906a.firebaseapp.com",
      databaseURL: "https://awaa-a906a.firebaseio.com",
      projectId: "awaa-a906a",
      storageBucket: "awaa-a906a.appspot.com",
      messagingSenderId: "77194554209",
      appId: "1:77194554209:web:c97288cb28a2cc34b3f320",
      measurementId: "G-VGCNBT9SD8"
    };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  }
}
