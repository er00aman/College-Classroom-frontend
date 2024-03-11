import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { TeacherAuthService } from '../tacherAuth/teacher-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService{
  apiUrl:any
  token:any

  constructor(private Http:HttpClient,@Inject('baseurl')_baseUrl:any,private teacherAuthService:TeacherAuthService) {
    this.apiUrl = _baseUrl
    this.token = teacherAuthService.getToken()
  }

  add(form:any){
    var headers_obj = new HttpHeaders().set('authorization',this.token)
    return this.Http.post(this.apiUrl+'teacher',form,{headers:headers_obj})
  }
}
