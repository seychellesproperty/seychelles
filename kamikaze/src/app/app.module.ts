import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { PresentComponent } from './present/present.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    DescriptionComponent,
    PresentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxFileDropModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
