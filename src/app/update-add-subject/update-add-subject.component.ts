import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../shared/department/department.service';
import { CourseService } from '../shared/course/course.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SemesterService } from '../shared/semester/semester.service';
import { SubjectService } from '../shared/subject/subject.service';

@Component({
  selector: 'app-update-add-subject',
  templateUrl: './update-add-subject.component.html',
  styleUrls: ['./update-add-subject.component.css']
})
export class UpdateAddSubjectComponent implements OnInit{

  constructor(private router:Router,private spinner:NgxSpinnerService,private toastr:ToastrService,private departmentService:DepartmentService,private courseService:CourseService,private activeRoute:ActivatedRoute,private semesterService:SemesterService,private subjectService:SubjectService){}

  updateSubject = new FormGroup({
    _id : new FormControl(),
    departmentId : new FormControl(),
    courseId : new FormControl(),
    semesterId : new FormControl(),
    subjectName: new FormControl()
  })

  ngOnInit(): void {
    this.updateSubject.patchValue({'_id':this.activeRoute.snapshot.paramMap.get('_id')})
    this.getAllDept()
    this.getAllCourse()
    this.getAllSemester()
  }
  allDept: any
  getAllDept(){
    this.departmentService.getall({status:true}).subscribe(
      (res:any)=>{
        this.allDept = res.data
      },
      err=>{

      }
    )
  }

  allCourse : any
  getAllCourse(){
    this.courseService.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data)
        this.allCourse = res.data
      },
      (err)=>{

      }
    )
  }

  allSemester : any
  getAllSemester(){
    this.semesterService.getAll({status:true}).subscribe(
      (res:any)=>{
        this.allSemester = res.data
      },
      (err)=>{

      }
    )
  }

  getAllSubject(){
    this.subjectService.getSingle({_id:this.activeRoute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updateSubject.patchValue({'departmentId':res.data.departmentId._id})
        this.updateSubject.patchValue({'courseId':res.data.courseId._id})
        this.updateSubject.patchValue({'semesterId':res.data.courseId._id})
        this.updateSubject.patchValue({'subjectName':res.data})
      }
    )
  }

  update(){
    this.spinner.show()
    this.subjectService.update(this.updateSubject.value).subscribe(
      (res:any)=>{
        if(res.success){
          this.spinner.hide()
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-subject')
        }else{
          this.spinner.hide()
          this.toastr.error(res.message)
        }
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }

}
