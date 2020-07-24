import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../service/auth-service.service';
import {TokenService} from '../../service/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData : any ={};
  login_Response :any = {};
  constructor(private auth:AuthServiceService, private tokenStorage: TokenService ,private route : Router) { }

  ngOnInit(): void {

  }

  _login_func(){

    console.log(this.loginData)
  this.auth._login_service(this.loginData).subscribe(data =>{
      this.login_Response = data

      console.log(this.login_Response)

     this.tokenStorage._save_token(this.login_Response.token);
     this.tokenStorage._save_userRole(this.login_Response.usertypes);
     this.route.navigate(['\dashboard'])

 })}

}
