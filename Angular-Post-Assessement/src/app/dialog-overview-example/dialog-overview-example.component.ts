import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../services/book.service';
import { DialogData } from '../user-landing/user-landing.component';

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.css']
})
export class DialogOverviewExampleComponent implements OnInit {

  isDataLoading=false;
    constructor(private book: BookService,
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
 
    ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
         window.location.reload();

    
  }
}
