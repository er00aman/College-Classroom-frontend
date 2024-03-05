import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setData(form:any){
    localStorage.setItem('email',form.data.email)
    localStorage.setItem('token',form.data.token)
    localStorage.setItem('userType',form.data.userType)
  }

  getEmail(){
    return localStorage.getItem('email')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getUserType(){
    return localStorage.getItem('userType')
  }

  removedata(){
    localStorage.clear()
  }

}
