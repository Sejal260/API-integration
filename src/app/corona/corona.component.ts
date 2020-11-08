import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  constructor(private backEnd : BackendService) { }
  data:any;
  ngOnInit(): void {
    this.backEnd.getData().subscribe((result)=>{
      this.data=result;
    });
  }
}
