import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empId: string
  employee: Employee
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.empId).subscribe( data => {
      this.employee = data;
    })

  }

}
