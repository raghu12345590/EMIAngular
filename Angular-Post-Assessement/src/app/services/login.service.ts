import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, pipe, Subject, subscribeOn, tap } from 'rxjs';
import { users } from '../model/Post';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  response: any;
  data: any
  name:any
  employeeId:any;
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;
 

  constructor(private _http: HttpClient, private _router: Router, private _toastr: ToastrService) { }

  public getEmployees(): Observable<users> {
    return this._http.get<users>("http://localhost:3002/employee")

  }
  public authenticateEmployee(data: any) {
    debugger;
    console.log(data)
    return this._http.get("http://localhost:3002/employee").subscribe(res => {
      this.user = res;
      this.data = data;
      this.authenticateUser();
      this.navigateUser();
    
    })

  }
  authenticateUser() {
    this.response = (this.user.find((x: any) => {
      debugger;
      return x.userName == this.data.userName && x.password == this.data.password
    }))

  }
  navigateUser() {
    if (this.response) {
      this.checkRole();
    }
    else {
      this._toastr.warning("invalid usernName or Password")
    }
  }
  checkRole() {
    this.name=this.response.name;
    this.isAuthenticated=true;
    
    if (this.response.role === 'admin') {
      this.isAdmin=true
      this.isAuthenticated=true;
      this._router.navigate(['admin'])
    }
    else if (this.response.role === 'user') {
      this.employeeId=this.response.employeeId;
      this.isUser=true;
      this.isAuthenticated=true;
      this._router.navigate(['user'])
      
    }
    else {
      

    }

  }







}
