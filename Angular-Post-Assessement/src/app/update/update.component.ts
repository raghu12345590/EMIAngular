import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // constructor(public route: ActivatedRoute, public router: Router, public bs: BookService) { }

  empForm: FormGroup;
  isDataLoading=false;

  public event: EventEmitter<any> = new EventEmitter();
  constructor(private bs: BookService,private router: Router, private formBuilder: FormBuilder,public route: ActivatedRoute) { }

  

  val: any;
  users: Post[] =[];
  user: Post;

  ngOnInit(): void {
     let sub = this.route.params.subscribe(params => {
       this.val = params['id'];
       //this.getEmployeeById(this.router.snapshot.params['id']);
     });
      console.log(this.val);
     this.bs.getUpdateUser(this.val).subscribe(data => {
       this.user =data;
       console.log(this.user.BookName);
     })

     this.empForm=this.formBuilder.group({
   
      id:['',Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
  }

  update() {
    this.bs.updateUser(this.user).subscribe(data => {
    });
    this.getUsers();
    this.router.navigate(['/admin']);
  }
  getUsers() {
    this.bs.getUsers().subscribe((response) => {
      this.users = response;
    })
  }

  public onFormSubmit(form: NgForm)
  {
    console.log(form);
   
   this.bs.addBook(form).subscribe(response=>{
     
    console.log(response);
      const id=response['id'];
      
      this.router.navigate(['/admin']);
    },(error:any)=>{
      console.log(error);
    })
  }

}
