import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';

@Injectable({ //Says here's a class you can inject as a dependency into another component or class..
  providedIn: 'root'  //the provided end route means that this class be injected globally..not specific to a given module
})  //can use it anywhere within this given angular app
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'; //added

  constructor(private httpClient: HttpClient) { } //added private httpClient: HttpClient
  
    getProductList(): Observable<Product[]>{ //returns an observable..Map the JSON data from SPring data Rest to product array
      return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
        map(response => response._embedded.products)
      );
    }

  }


interface GetResponse{ //unwraps the JSON from Srping Dat REST _embedded entry
  _embedded:{
    products:Product[];
  }
}


