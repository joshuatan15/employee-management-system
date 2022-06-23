import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management-system';
  tabIndex: number = 0;
  employeeId: string = '';

  constructor() {}

  ngOnInit(): void {
    let index = sessionStorage.getItem('tabIndex') || 0;
    this.tabIndex = +index;
  }  

  setTabIndex(e: any) {
    this.tabIndex = e.index;
    sessionStorage.setItem('tabIndex', e.index);
  }

  toEditTab(value: string) {
    this.tabIndex = 2;
    this.employeeId = value;
  }
}
