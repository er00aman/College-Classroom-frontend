import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent implements OnInit{

  constructor(private teacherService:TeacherService){}

  ngOnInit(): void {
    this.allTeacherDetail()
  }

  allTeacher:any
  allTeacherDetail(){
    this.teacherService.getAll({status:true}).subscribe(
      (res:any)=>{

        console.log(res.data)

        this.allTeacher = res.data
      }
    )
  }

  deleteUser(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  getdate(d:any){
    let dd = d.split("T")
    return dd[0]
  }
}

