import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../shared/login/login.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  adminlogin = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private loginservice:LoginService, private authservice:AuthService){}

  ngOnInit(): void {

  }

  login(){
    this.spinner.show()
    this.loginservice.admin(this.adminlogin.value).subscribe(
      (res:any)=>{
        if(res.success){
          this.spinner.hide()
          this.toastr.success(res.message)
          this.authservice.setData(res)
          this.router.navigateByUrl('/layout/home')
        }
        else{
          this.toastr.error(res.message)
          this.spinner.hide()
        }
      },
      err=>{
        this.toastr.error(err)
      }
    )
  }

}
