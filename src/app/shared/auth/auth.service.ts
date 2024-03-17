import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setData(form:any){
    localStorage.setItem('email',form.data.email)
    localStorage.setItem('email',form.data.teacherRegisterEmail)
    localStorage.setItem('Token',form.token)
    localStorage.setItem('userType',form.data.userType)
  }

  getEmail(){
    return localStorage.getItem('email')
  }

  getToken(){
    return localStorage.getItem('Token')
  }

  getUserType(){
    return localStorage.getItem('userType')
  }

  removedata(){
    localStorage.clear()
  }
}
