import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) {}
  ServiceGetProducts():Observable<any[]>{
    console.log();
    return this.http.get<any>("http://localhost:37017/api/Product");
  }
}
