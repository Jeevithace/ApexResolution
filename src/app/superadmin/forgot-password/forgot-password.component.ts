import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../service/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email :any ={};
  constructor(private auth_service : AuthServiceService , private route: Router) { }

  ngOnInit(): void {
  }



  _forgot_password(){
    this.auth_service._forgot_password(this.email).subscribe(data=>{
      console.log(data)
      
      alert("Password Linl sent to ur mail, kindly check it")
      this.route.navigate(['\login'])
     
    
  })
  }
}
