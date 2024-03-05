import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TeacherAuthService } from 'src/app/shared/tacherAuth/teacher-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authService : AuthService, private router: Router,private teacherAuth:TeacherAuthService){}

  email:any
  userType:any

  teacherRegisterEmail:any

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    // console.log(this.authService.getEmail())
    // console.log(this.authService.getUserType())

    if(this.authService.getEmail() != null)
    {
      this.email = this.authService.getEmail()
    }

    if(this.authService.getUserType() != null)
    {
      this.userType = this.authService.getUserType()
    }



    if(this.teacherAuth.getEmail() != null){
      this.teacherRegisterEmail = this.teacherAuth.getEmail()
    }
    if(this.teacherAuth.getUserType() != null){
      this.userType = this.teacherAuth.getUserType()
    }
  }

  logout(){
    this.authService.removedata()
    this.router.navigateByUrl ('/layout/admin-login')
  }

  teacherLogout(){
    this.authService.removedata()
    this.router.navigateByUrl('/layout/teacher-login')
  }

}
