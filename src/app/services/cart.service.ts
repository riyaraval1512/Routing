import {Injectable} from '@angular/core';
import {IProductDetails} from 'src/app/models/users.model';

@Injectable({
    providedIn: 'root'
})
export class CartService{

    public cartProduct:IProductDetails[]=[];

}