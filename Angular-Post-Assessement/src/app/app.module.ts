import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { UpdateComponent } from './update/update.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLandingComponent,
    AddBooksComponent,
    UserLandingComponent,
    DialogOverviewExampleComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
