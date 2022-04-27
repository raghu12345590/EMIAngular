// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private router: Router) { }
//   email:string=''
//     password:string='';

//   ngOnInit(): void {
//   }

//   logIn(){
//     if(this.email == "Admin@gmail.com" && this.password == "Admin@123" )
//     {
//       this.router.navigate(['/admin']);
//     }else if(this.email == "User@gmail.com" && this.password == "User@123" ){
//       this.router.navigate(['/user']);

//     }
//     else{
//         alert("please enter valid deatails")
//     }
// }
// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private _loginService: LoginService,private toster:ToastrService) { }

  ngOnInit(): void {
  }


  public onSubmit(form: NgForm):void{
    this._loginService.authenticateEmployee(form.value);  
  }

 

}

























// userData: any;
  // formData: any;
  // response: any;
  // name:any;

  // public authenticateUser() {
  //   this.response = (this.userData.find((x: any) => {
  //     debugger;
  //     return x.userName == this.formData.userName && x.password == this.formData.password
  //   }))

  // }
  // public navigateUser() {
  //   if (this.response) {
  //     this.checkRole();
  //   }
  //   else {
  //    this.toster.warning("invalid usernName or Password")
  //   }

  // }
  // public checkRole() {
  //   if (this.response.role === 'admin') {
  //     this.name=this.response.name;
  //     this._router.navigate(['booksList'],{queryParams:{name:this.response.name}})
     
  //   }
  //   else if (this.response.role === 'user') {
  //     this._router.navigate(['userRequest'])
  //   }
  //   else {
    
  //   }

  // }

