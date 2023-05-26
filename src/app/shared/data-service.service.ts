import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get('https://opentdb.com/api_category.php');
  }

  getDataFromStore(quantity:number, category:number,difficulty:string, type:string){
    return this.http.get(`https://opentdb.com/api.php?amount=${quantity}&category=${category}&difficulty=${difficulty}&type=${type}`)
  }
}
