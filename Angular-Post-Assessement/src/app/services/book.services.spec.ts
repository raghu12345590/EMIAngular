import { HttpErrorResponse } from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service";
import {TestBed } from "@angular/core/testing";
import { Post } from "../model/Post";



import { COURSES } from "../db.data";
import { of } from "rxjs/internal/observable/of";




describe('BooksService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule]});
    service = TestBed.inject(BookService);
   
  });

  fit('Should getAllBooks',()=>{
    const MockBookData = [

        {
            id: 1,
            BookName: "Bible Stories",
            Author: "John",
            Content: "Hearts is a trick taking card game in which players try to avoid taking penalty cards.It is game is closely related to other cards games like whist or bridge",
            Date: new Date(Date.now()),
            Likes: 4,
            change:true,
            imageUrl: "assets/images/OIP.jpg",
            authorUrl: "assets/images/Author3.jpg"
          }

    ];
    let response:Post[];

    spyOn(service,'getData').and.returnValue(of(MockBookData));

    service.getData().subscribe(res =>{

       response=res;

       expect(response).toEqual(MockBookData)

    });
  })

//   fit('getAll should make a GET HTTP request and return all data items', () => {
//     const MockBookData = [

//         {
//             id: 1,
//             BookName: "Bible Stories",
//             Author: "John",
//             Content: "Hearts is a trick taking card game in which players try to avoid taking penalty cards.It is game is closely related to other cards games like whist or bridge",
//             Date: new Date(Date.now()),
//             Likes: 4,
//             change:true,
//             imageUrl: "assets/images/OIP.jpg",
//             authorUrl: "assets/images/Author3.jpg"
//           }

//     ];
//     service.getData().subscribe(res => {
//       expect(res).toEqual(MockBookData); 
//       expect(res.length).toBe(1); 
//      }); 
//     const req = httpTestingController.expectOne('apiUrl');
//     expect(req.request.method).toBe('GET');
//     expect(req.cancelled).toBeFalsy(); 
//     expect(req.request.responseType).toEqual('json');
//     req.flush(MockBookData);
//     httpTestingController.verify();
//    });
});




