import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employeeList;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeList=this._employeeService.getEmployees().subscribe(
      data=>{
        if(data!=null && data !=undefined)
           this.employeeList=data;
           else
          alert('No data available');
    },error=>{
      console.log(error);
    })
  }

}
