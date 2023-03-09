import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Authentication form}
  loginForm!: FormGroup;
  
  userCtrl!: FormControl;
  passCtrl!: FormControl;
  hide: boolean = true;
  //
  msgError: string = '';

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
    private profileService: ProfileService,
    private router: Router) {
    //init Login Form
    this.loginForm = fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      rememberPass:[false]
    });
    //
    this.userCtrl = fb.control('', Validators.required);
    this.passCtrl = fb.control('', Validators.required);
  }

  ngOnInit(): void {
    this.getCredentials();
  }

  getCredentials() {
    const credentials = localStorage.getItem("credentials");
    if(!!credentials) {
      this.loginForm.patchValue({
        user: JSON.parse(credentials).user,
        password: JSON.parse(credentials).pass,
        rememberPass: true
      });
    }
  }

  login() {
    let {user, password, rememberPass} = this.loginForm.value;
    this.loginService.loginWithUser(user, password).subscribe((res: any) => {
      if(res.success){
        this.profileService.setUser(new User(res['user']));
        if(rememberPass) {
          localStorage.setItem("credentials", JSON.stringify({user: user, pass: password}));       
        }else 
          localStorage.removeItem("credentials");
        this.router.navigate(['/home']);
      }else {
        this.msgError = res.msg;
      }
    });
  }

  getErrorMessage() {
    return "You must enter a value";
  }

}
