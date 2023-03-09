import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employee?: IEmployee;
  private employeedId?: string;
  
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private currencyPipe: CurrencyPipe
  ) { 
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params => {
      this.employeedId = params['id'];
      this.getEmployees();
    }));
  }

  getEmployees() {
    if(this.employeedId)
    this.employeeService.getEmployeeById(this.employeedId).then((employee: IEmployee) => {
      this.employee = employee;
      this.employee.salary = this.currencyPipe.transform(this.employee.salary, '$');
    });
  }
}
