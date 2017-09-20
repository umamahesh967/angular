import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule}       from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import {SearchService} from './services/search.service';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
