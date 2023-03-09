import { Component } from '@angular/core';
import { User } from './models/user';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ksp-employees';
  public user!:User | null;

  constructor(private profileService: ProfileService) {
    profileService.userLogin.subscribe((user: User) => {
      this.user = user;
    });
    profileService.logOut.subscribe((flag: boolean) => {
      this.user = null;
    });
  }
}
