import { Router,
         NavigationExtras } from '@angular/router';
import {UserService} from "../shared/service/user.service";
import {User} from "../shared/models/user.model";
import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl: 'login.component.html'
	})

export class LoginComponent{
 model:any = {username:'',password:''};
 error:string;

  constructor(
    public router: Router,
    private userService:UserService) {
  }

  login() {
    let result = this.userService.getAuth(this.model as User);
        if(result){
            this.router.navigate(['/dashboard']);
        }
        else {
            this.error = '账号linweiwei，密码123'
        }
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}