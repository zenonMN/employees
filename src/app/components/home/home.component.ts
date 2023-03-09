import { Component, OnInit } from '@angular/core';
import { ITip } from 'src/app/interfaces/tip';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tip: string = "";

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getDayType().then((tip: ITip) => {
      this.tip = tip.text;
    });
  }

}
