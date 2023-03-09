import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user!: User | null;
  userLogin: EventEmitter<User> = new EventEmitter<User>();
  logOut: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  setUser(user: User) {
    this.user = user;
    this.userLogin.emit(user);
  }

  getUser(): User | null {
    return this.user;
  }

  logout() {
    this.user = null;
    this.logOut.emit(true);
  }

  async getDayType(): Promise<any> {
    const response = await this.http.get('assets/json/tips.json').toPromise().catch(e =>e);
    let tips: any[] = this.utilityService.validateResponse(response, undefined);
    if(!tips)
      return;
    const tip = Math.floor(Math.random() * tips.length);
    return tips[tip];
  }
}
