import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {IProductDetails} from 'src/app/models/users.model'

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit {

  @Input() stock:number;
  @Input() productDetail: IProductDetails;
  @Input() component:string;
  @Output() updateStock = new EventEmitter<{productDetail: any}>();

  divColor:string;
  colortag:string;

  constructor() { }

  ngOnInit(){}
  
  updateProductStock(){
    this.updateStock.emit();
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    if(changes.stock.currentValue!=changes.stock.previousValue)
    {
      if(this.productDetail.stock<=10){
        this.divColor="red";
        this.colortag="low";
      }
      if(this.productDetail.stock>10 && this.productDetail.stock<=20){
        this.divColor="yellow";
        this.colortag="average";
      }
      if(this.productDetail.stock>20){
        this.divColor="green";
        this.colortag="high";
      }
    }
  }

}
