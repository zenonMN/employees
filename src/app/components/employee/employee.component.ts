import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // TODO: VARIABLES TABLA
  displayedColumns: string[] = ['id', 'name', 'salary', 'job', 'status', 'dateOfHire', 'edit', 'delete'];
  dataSource!: MatTableDataSource<any>;
  tamanioTabla = 0;
  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().then((employees: any[]) => {
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator1;
    });
  }

  verDetalle(employee: IEmployee) {
    this.router.navigate(['/employee-detail'], {queryParams: {
      id: employee.id
    }});
  }

  deleteEmployee(employee: IEmployee) {
    let employeesTemp = this.dataSource.data;
    employeesTemp = employeesTemp.filter(emp => emp.id !== employee.id);
    this.dataSource = new MatTableDataSource(employeesTemp);
  }

}
