import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Post, User } from '../model/Post';


@Injectable({
  providedIn: 'root'
})
export class BookService {

 headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accect','accept/json');
 httpOption = {
   headers: this.headers
 }

  baseUrl='http://localhost:3000/Employee';
  userUrl='http://localhost:3000/User';
  constructor(private http:HttpClient) { }

  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }
 
    return throwError('their is error in code');
  }

  public getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  public getUsers() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  public getEmployeeById(id:number):Observable<Post>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Post>(url).pipe(catchError(this.handleError));
  }

  public reqUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(catchError(this.handleError));
  }

  public updateReqCount(user: any): Observable<Post> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put<Post>(url,user).pipe(
      map(() => user)
    );
  }
  
  
  public getUserById(id:number):Observable<User>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<User>(url).pipe(catchError(this.handleError));
  }

  public addBook(emp:any):Observable<Post>{
    return this.http.post<Post>(this.baseUrl,emp);
  }

  public deleteEmployee(id:number):Observable<Post>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Post>(url).pipe(catchError(this.handleError));
  }

  public getUpdateUser(id: number): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Post>(url,this.httpOption);
  }

  public updateUser(user: any): Observable<Post> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<Post>(url,user).pipe(
      map(() => user)
    );
  }

  public updateUserInfo(id:number,changes: Partial<User>):Observable<User>
  {
    const url=`${this.userUrl}/${id}`;
    return this.http.put<User>(url,changes);
  }

  public updateLikes(id:number, changes: Partial<Post>):Observable<Post>
  {
    const url=`${this.baseUrl}/${id}`;
    return this.http.put<Post>(url,changes);
  }


}
