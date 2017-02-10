import { Router } from '@angular/router';
import { UserService } from "../shared/service/user.service";
import { AuthService } from './auth.service';
import {User} from "../shared/models/user.model";
import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl: 'login.component.html'
	})

export class LoginComponent{
 model:any = {username:'',password:''};

  constructor(
    public authService: AuthService,
    public router: Router,
    private userService:UserService) {
  }

  login() {
     this.authService.login().subscribe(() => {
        let result = this.userService.getAuth(this.model as User);
            if(result){
                this.router.navigate(['/form']);
            }
            else {
                this.authService.isLoggedIn = false;
            }
      });
  }

  logout() {
    this.authService.logout();
  }
}