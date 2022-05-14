import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-Home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})

export class DashboardPage implements OnInit {
  userDetail: string;

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private popCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    });
  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
