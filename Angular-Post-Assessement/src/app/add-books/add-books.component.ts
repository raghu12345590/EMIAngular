import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  empForm: FormGroup;
  isDataLoading=false;

  public event: EventEmitter<any> = new EventEmitter();
  constructor(private empService: BookService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.empForm=this.formBuilder.group({
   
      id:['',Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
  }

  public onFormSubmit(form: NgForm)
  {
    console.log(form);
   
   this.empService.addBook(form).subscribe(response=>{
     
    console.log(response);
      const id=response['id'];
      
      this.router.navigate(['/admin']);
    },(error:any)=>{
      console.log(error);
    })
  }

}
