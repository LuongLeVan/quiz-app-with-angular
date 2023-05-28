import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  dataList:any = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
  this.dataList =  this.dataService.getData()
  this.dataList  = this.dataList;
    
      
  }
}
