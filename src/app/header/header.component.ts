import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  collapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }

  onSignOut() {
    this.authService.signOutUser();
  }
 
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  collapseBack (): void {
    this.collapsed = true;
  }

}
