import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map  } from 'rxjs';
import { Products } from 'src/app/model/product/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products:Products[]=[]

  constructor( private http:HttpClient) { }

getProducts():Observable<Products[]>{

  return this.http.get<Products[]>('https://fakestoreapi.com/products')
 


}


}
