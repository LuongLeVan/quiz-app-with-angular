import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {
  dataList:any = [];
  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get<any>('https://opentdb.com/api_category.php');
  }

  getDataFromStore(quantity:number, category:number,difficulty:string, type:string){
    return this.http.get(`https://opentdb.com/api.php?amount=${quantity}&category=${category}&difficulty=${difficulty}&type=${type}`)
  }

  setData(data:any){
      this.dataList = data;
  }

  getData(){
    return this.dataList;
  }
}
