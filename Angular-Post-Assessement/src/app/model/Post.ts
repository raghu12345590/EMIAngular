export interface Post {
    id: number;
    BookName: string;
    Author: string;
    Content: string;
    Date: Date;
    Likes: number;
  change:boolean;
  show:boolean;
    imageUrl: string;
    authorUrl: string;
    //gender: string;
    
  }

  export interface User {
    id: number;
    email: string;
    totalBook: number;
  }

  export class users{
    id:1;
    userName:"raghu";
    password:"raghu";
    name:"raghu";
    phoneNumber:8106194137;
    role:"admin";
    roleId:1
}