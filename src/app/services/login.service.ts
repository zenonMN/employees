import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginWithUser(user: string, password: string): Observable<any> {
    return new Observable<any>(obs => {
      this.http.get('assets/json/credentials.json').subscribe((res: any) => {
        if(!res['user'])
          return;
        obs.next(user === res['user'] && password === res['password'] ? {success: true, user: res['userData']}: {success: false, msg: "User not registered"});
        obs.complete();
      });
    });
  }
}
