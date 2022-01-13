import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const productURL = "http://localhost:9090/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(public httpClient: HttpClient) { }

  //getting all records
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL)
  }

  httpOtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  //deleting a single record
  //http://localhost:9090/product/98
  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${productURL}/${productId}`)
  }

  //getting a single record
  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${productURL}/${productId}`)
  }

  //save a single record
  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(productURL, product, this.httpOtions)
  }

  //update a single record
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(productURL, product, this.httpOtions)
  }

}
