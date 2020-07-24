import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../service/auth-service.service';
import { ActivatedRoute, Router, UrlSerializer } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})


export class ResetPasswordComponent implements OnInit {
  tooglePassword: boolean;
  toogleConPassword: boolean;
   reset_credentials : any={};
   email :any;
   token:any;
   parsedToken:any;
  constructor(private authService : AuthServiceService , private route: Router , private  activeRoute : ActivatedRoute,
     private parsedUrl : UrlSerializer ) {
    this.tooglePassword = false;
    this.toogleConPassword = false;
   
  }
  clicktooglePassword() {
    this.tooglePassword = !this.tooglePassword;
  }
  clicktoogleConPassword() {
    this.toogleConPassword = !this.toogleConPassword;
  }

  ngOnInit(): void {

   this.email =  this.activeRoute.snapshot.queryParamMap.get('Email');
   
   this.token =  this.activeRoute.snapshot.queryParamMap.get('token');
   console.log(this.token)
  //  let parsedToken = this.parsedUrl. parse(this.token)
    // this.parsedToken= parsedToken.root.children.primary.segments[0]['path'];
    // console.log(this.parsedToken)
  }


  try_resetPassword(){
    console.log(this.reset_credentials.password)
    let reset_data = {
    "email": this.email,
    "password":this.reset_credentials.password,
    "token":  this.token
    }
  this.authService._reset_password(reset_data).subscribe(data=>{
    console.log(data)
  })
    
  }

}
