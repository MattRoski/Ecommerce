import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; //added

  constructor(private httpClient: HttpClient) { } //added private httpClient: HttpClient
  
    getProductList(): Observable<Product[]>{
      return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
        map(response => response._embedded.products)
      );
    }

  }


interface GetResponse{
  _embedded:{
    products:Product[];
  }
}


