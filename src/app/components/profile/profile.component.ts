import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User|null;
  constructor(private profileService: ProfileService, private router: Router) {
    this.user = this.profileService.getUser();
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.profileService.logout();
    this.router.navigate(['/login']);
  }

}
