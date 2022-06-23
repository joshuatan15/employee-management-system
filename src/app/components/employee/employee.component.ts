import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dateString: string = '';

  employee: IEmployee = { 
    name: '',
    designation: '',
    salary: 0,
    shortBio: '',
    dob: ''
  }
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.employeeService.addEmployee(form.value).
      then(() => {
        form.reset();
        alert('Employee is successfully added.');
      });
      
  }

}
