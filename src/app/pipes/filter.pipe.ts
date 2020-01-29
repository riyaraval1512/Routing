import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IProductDetails } from '../models/users.model';

@Pipe({
  name: 'filter'
})
@Injectable({
  providedIn:'root'
})
export class FilterPipe implements PipeTransform {

  transform(items: IProductDetails[], field:any[], value: any): IProductDetails[] {
   
    if(!items){
      return [];
    }
    if(!field || !value){
      return items;
    }
    return items.filter(item => {
      if(field[0]=='product_id' && field[1]=='title'){
      //  return item[field[0]].toString().toLowerCase().includes(value.toLowerCase()) || item[field[1]].toString().toLowerCase().includes(value.toLowerCase());
       return (String(item[field[0]])).includes(value) ? true:(item[field[1]]).toLowerCase().includes(value.toLowerCase())? true : false;
      } 
      else if(field[0]=='title') {
        return (String(item[field[0]])).includes(value) ? true : false;
      }
      else if(field[0]=='product_id'){
        return (String(item[field[0]])).includes(value) ? true : false;
      }
    });
}
}