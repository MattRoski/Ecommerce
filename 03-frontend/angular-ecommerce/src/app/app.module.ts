import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http'; //added
import { ProductService } from './services/product.service'; //added
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule //added

  ],
  providers: [ProductService], //added ProductService..needed import
  bootstrap: [AppComponent]
})
export class AppModule { }
