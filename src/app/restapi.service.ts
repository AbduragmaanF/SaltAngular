import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }



  public login(username:string,password:string){
    const headers = new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:8080/",{headers,responseType:'text' as 'json'});
  }

  public getUsers(){
    let username="super";
    let password="5555";
    const headers = new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:8080/employee/all",{headers});
    
  }
}
