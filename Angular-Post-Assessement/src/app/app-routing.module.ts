import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AuthGuardsGuard } from './guard/auth-guards.guard';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

const routes: Routes = [
  
  {path:'add', component:AddBooksComponent},
  {path:'user', component:UserLandingComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'admin', component:AdminLandingComponent},
  {path:'', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
