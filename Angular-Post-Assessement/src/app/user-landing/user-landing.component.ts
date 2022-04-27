import { Component,  Inject,  OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { DialogOverviewExampleComponent } from '../dialog-overview-example/dialog-overview-example.component';
import { Post, User } from '../model/Post';

export interface DialogData {
  
  name: string;
  Date: number;
}

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  displayedColumns:string[]=['id','BookName','Author','Date'];
  emp:Post={id:0,BookName:'',Author:'',Content:'',Date: new Date,Likes:0,change:true,show:false,imageUrl:'',authorUrl:''};


  data:Post[]=[];
  sort:Post[]=[];
  name:string = '';
  date:number;
  showImage: boolean = false;
  showDesc: boolean;
   today = new Date();
 tomorrow = new Date(this.today.getTime() + (24 * 60 * 60 * 1000));
 
  //name: string='Your requested has been approved';
  user:User;
  isDataloading=true;
  dataSource: any = [];
  reqId:User[]=[];
  count:number=0;
  replace:boolean;
  totalLikes:number;
  constructor(private book:BookService,private route:Router,private router:ActivatedRoute,public dialog: MatDialog) {
   
   }

   openDialog(id:number, userId:number, email:string): void {
     console.log(id)
     if(id<3){
      this.count=id;
      this.count++;
      
       console.log(this.reqId);
       this.book.updateUserInfo(userId,{totalBook:this.count,id:userId,email:email}).subscribe(res=>{

        debugger;

        console.log(res);

      });
     
      
    let dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '250px',
      height: '400px',
      data: { name: this.name=`Your request has been approved your next submission date ${this.tomorrow}`,
              date: this.date= this.tomorrow.setDate(this.tomorrow.getDate()+1) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });}else{
      let dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
        width: '250px',
        height: '300px',
        data: { name: this.name=`you exceed the limit of book request`,
                date: this.date= this.tomorrow.setDate(this.tomorrow.getDate()+1) }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.name = result;
      });
      
    }
  }
  toggleImage(id:number,BookName:string,Author:string,Content:string,Date: Date,Likes:number,change:boolean,show:boolean,imageUrl:string,authorUrl:string){
// console.log(id);
//     if(id){
//       console.log('hi');
//     this.showImage = !this.showImage;
//     }
      // this.showImage = !this.showImage;
       if(show==false){
         this.showDesc = true;
         this.book.updateLikes(id,{id:id,BookName:BookName,Author:Author,Content:Content,Date:Date,Likes:Likes,change:change,show:this.showDesc,imageUrl:imageUrl,authorUrl:authorUrl}).subscribe(res=>{
          console.log(res);
        })
        window.location.reload();

       }else if(show==true){
        this.showDesc = false;
        this.book.updateLikes(id,{id:id,BookName:BookName,Author:Author,Content:Content,Date:Date,Likes:Likes,change:change,show:this.showDesc,imageUrl:imageUrl,authorUrl:authorUrl}).subscribe(res=>{
         console.log(res);
        })
        window.location.reload();
       }
      
}

   private _listFilter: string = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredBook = this.performFilter(value);
    }
    filteredBook: Post[] = [];
    public productsArray: Post[];
    performFilter(filterBy: string): Post[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.data.filter((product: Post) =>
      product.BookName?.toLocaleLowerCase().includes(filterBy));
         
  }

   ngOnInit(): void {
    this.book.getData().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isDataloading=false;
    },error=>{
      console.log(error);
      this.isDataloading=false;
    })
    this.book.reqUser().subscribe(response=>{
      this.reqId=response;
      
      console.log(this.reqId);
      this.isDataloading=false;
    },error=>{
      console.log(error);
      this.isDataloading=false;
    })

    this.getEmployeeById(this.router.snapshot.params['id']);
   // this.productsArray = this.data;
    
   this.book.getData().subscribe(response=>{
    this.filteredBook = response;
   });
   
    //this._listFilter='list';
  }

  public getEmployeeById(id:number):void
  {
   this.book.getEmployeeById(id).subscribe(data=>{
     this.emp=data;
     console.log(this.emp);
   });
  }

  public likes(id:number,BookName:string,Author:string,Content:string,Date: Date,Likes:number,change:boolean,show:boolean,imageUrl:string,authorUrl:string)
  {
    if(change==true){
      console.log(Likes);
      this.count=Likes;
      this.replace=false;
      this.count--;
      console.log(this.count);
      this.book.updateLikes(id,{id:id,BookName:BookName,Author:Author,Content:Content,Date:Date,Likes:this.count,change:this.replace,show:show,imageUrl:imageUrl,authorUrl:authorUrl}).subscribe(res=>{
        console.log(res);
      })
      window.location.reload();
  
  }else{
    console.log(Likes);
    this.count=Likes;
    this.replace=true;
    this.count++;
    console.log(this.count);
    this.book.updateLikes(id,{id:id,BookName:BookName,Author:Author,Content:Content,Date:Date,Likes:this.count,change:this.replace,show:show,imageUrl:imageUrl,authorUrl:authorUrl}).subscribe(res=>{
      console.log(res);
    })
    window.location.reload();
  }

}


// @Component({
//   selector: 'app-user-landing',
//   templateUrl: './user-landing.component.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
}

