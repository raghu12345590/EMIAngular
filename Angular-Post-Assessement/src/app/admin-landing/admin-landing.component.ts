import { DataSource } from '@angular/cdk/collections/data-source';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBooksComponent } from '../add-books/add-books.component';
import { BookService } from '../services/book.service';
import { Post, User } from '../model/Post';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  displayedColumns:string[]=['action','BookName','Author','Date','id'];
  emp:Post={id:0,BookName:'',Author:'',Content:'',Date: new Date,Likes:0,change:true,show:false,imageUrl:'',authorUrl:''};


  data:Post[]=[];
  reqId:User[]=[];
  isDataloading=true;
  dataSource: any = [];
 
  constructor(private book:BookService,private route:Router,private router:ActivatedRoute) {
   
   }


  //  openDialog(): void {
  //   let dialogRef = this.dialog.open(PostDialogComponent, {
  //     width: '600px',
  //     data: 'Add Post'
  //   });
  //   dialogRef.componentInstance.event.subscribe((result) => {
  //     this.dataService.addPost(result.data);
  //     this.dataSource = new PostDataSource(this.dataService);
  //   });
  // }

  ngOnInit(): void {
    this.book.getData().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isDataloading=false;
    },error=>{
      console.log(error);
      this.isDataloading=false;
    })
   


    this.getEmployeeById(this.router.snapshot.params['id']);
  }

  


  public getEmployeeById(id:number):void
  {
   this.book.getEmployeeById(id).subscribe(data=>{
     this.emp=data;
     console.log(this.emp);
   });
  }

  public delete(id:number)
{
  console.log(id);
  if(confirm("Are you sure to delete? ")){
  this.book.deleteEmployee(id).subscribe(response=>{
    console.log(response);
    this.route.navigate(['/admin']);
    window.location.reload();
  },(error:any)=>{
    console.log(error);
  })
  }

}

public update(id) {
  this.route.navigate(['/update']);
}

// private _listFilter: string = '';

//     get listFilter(): string {
//         return this._listFilter;
//     }
//     set listFilter(value: string) {
//         this._listFilter = value;
//         console.log('In setter:', value);
//         this.filteredBook = this.performFilter(value);
//     }
    //filteredBook: Post[] = [];
  //   performFilter(filterBy: string): Post[] {
  //     filterBy = filterBy.toLocaleLowerCase();
  //     return this.data.filter((product: Post) =>
  //     product.BookName?.toLocaleLowerCase().includes(filterBy));
         
  // }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(AddBooksComponent, {
  //     width: '600px',
  //     data: 'Add Post'
  //   });
  //   dialogRef.componentInstance.event.subscribe((result) => {
  //     this.book.addBook(result.data);
  //     this.dataSource = new PostDataSource(this.book);
  //   });
  // }

}

// export class PostDataSource extends DataSource<any> {
//   constructor(private book: BookService) {
//     super();
//   }

//   connect(): Observable<Post[]> {
//     return this.book.getData();
//   }

//   disconnect() {
//   }
// }
