import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() id: string;
  employee: IEmployee;

  constructor(
    private employeeService: EmployeeService) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.id)
      this.employeeService.getEmployeeByID(this.id).subscribe(res => {
        this.employee = res
      });
  }

  onUpdate() {
    this.employeeService.updateEmployee(this.employee).then(() => {
      alert('Employee has been successfully updated.');
    })
  }



}
