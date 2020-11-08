import { Component, OnInit } from '@angular/core';
import { BackendService } from "../backend.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  branches=['CS' , 'IT' , 'CSE' ,'ECE' ,'EN' ,'EI' ,'ME' ,'CE'];
  constructor(private backend:BackendService) { }
  name: string;
  student_no: number;
  branch: string;
  mobile_no: number;
  email: string;
  password: string;
  response: any;
  formData: any;
  displayAb = false;
  success = false;
  failure = false;
  topicHasError=true;

  ngOnInit() {}
  signin(data) {
    this.formData = data.value;
    this.displayAb = true;
    this.backend.signin(this.formData).subscribe(res => {
      this.displayAb = false;
      if (res.status == 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
      
    });

    data.reset();
  }
  validateTopic(value){
    if (value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  removeAlert() {
    var element = document.getElementById("alert");
    element.remove();
  }
}
