import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { IEmployee } from '../interfaces/employee';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private getEmployeesObservable(): Observable<any> {
    return this.http.get('assets/json/employees.json');
  }


  async getEmployees(): Promise<any> {
    const response = await this.http.get('assets/json/employees.json').toPromise().catch(e =>e);
    let employees: any[] = this.utilityService.validateResponse(response, undefined);
    if(!employees)
      return;
    return employees;
  }

  async getEmployeeById(id: string): Promise<any> {
    const employees: IEmployee[] = await this.getEmployees();
    if(!employees)
      return;
    return employees.find((employee: IEmployee) => {
      return String(employee.id) === id;
    });
  }
}
