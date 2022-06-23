import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[] = [];
  @Output() next = new EventEmitter<string>();


  constructor(
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((res: IEmployee[]) => {
      this.employees = res;
    })
  }

  editModal(employee: IEmployee) {
    this.next.emit(employee.id);
  }

  deleteEmployee(employee: IEmployee) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(employee).then(() => 
       console.log('delete successful'));
    }
  }
}
