import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data-service.service';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any = [];
  quantity:number = 10;
  selectedCategory: any = {};
  dataList:any = [];
  difficulties:Object[] = [
    {name:'Easy',value:'easy'},
    {name:'Medium',value:'medium'},
    {name:'Hard',value:'hard'}
  ];
  selectDifficult:string = '';
  types:Object[] = [
    {name:'Multiple Choice',value:'multiple'},
    {name:'True/False',value:'boolean'},
  ];
  selectType:string = '';
  getDifficult:string = 'easy';
  getType:string = 'multiple';
  idCategory:number = 0;
  constructor(private dataService: DataService,  private router: Router){ }

  ngOnInit() {
     this.dataService.getCategory().subscribe(res => {
        this.categories = res.trivia_categories;   
      })
     
  }

  handleCategory(object:any){
    this.idCategory = object.id;
  }

  handleDifficulty(event:any){  
    this.getDifficult = event.value;  
       
  }

  handleType(event:any){
    this.getType = event.value;
    
  }

  handleGetQuestion(){
    console.log(this.quantity,this.idCategory, this.getDifficult, this.getType);
    
    this.dataList = this.dataService.getDataFromStore(this.quantity,this.idCategory, this.getDifficult, this.getType)
    console.log(this.dataList);
    this.dataService.setData(this.dataList.results)
    
    this.router.navigate(['/quiz']);
  }
}
