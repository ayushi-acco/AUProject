import { Component, OnInit } from '@angular/core';
import {IYear} from '../IYear';
import { ReportService } from '../report.service';
import {IReport} from '../IReport';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  selectedyear: any = "Year";
  selectedbatch: any ="Batch";
  selectedtest: any ="Test";
  hello: any = "year and batch";
  batchlist: string[];
  testlist: string[];
  returnlist: string[];
  //private years:IYear[];
  private report:IReport[];
  
  constructor(private reportservice:ReportService ) { }
  ngOnInit(){}

  myfunc() {
    this.reportservice.getList().subscribe(data => {this.report=data;
      console.log(this.report)});

    }
    selectOption(id: number) {
      //getted from binding
      console.log(this.selectedyear);
  
      if(this.selectedyear == 2019){
        this.batchlist = ['MSAU1', 'MSAU2'];
      }
      if(this.selectedyear == 2018){
        this.batchlist =['MSAU1', 'MSAU2','MSAU3'];
      }
  
      if(this.selectedbatch == "MSAU1"){
        this.testlist = ['week1','week2'];
      }
      if(this.selectedbatch == "MSAU2"){
        this.testlist = ['week1','week2','week3'];
      }
      if(this.selectedbatch == "MSAU3"){
        this.testlist = ['week1','week2','week3','week4'];
      }
     
    }
  
  }

