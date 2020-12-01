import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employee/all";
  private baseURL2 = "http://localhost:8080/employee";
  private baseURL3 = "http://localhost:8080/employee/update";
  private baseURL4 = "http://localhost:8080/employee/delete";
  private baseURL5 = "http://localhost:8080/employee/read";
  

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
      return this.httpClient.post(`${this.baseURL2}/create`, employee);
  
  }

  getEmployeeById(empId: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL5}/${empId}`);
  }

  updateEmployee(id: string,employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${id}`)
  }
}
