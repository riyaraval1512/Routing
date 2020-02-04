import {Injectable} from '@angular/core';
import {IProductDetails} from 'src/app/models/users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductListService{
    constructor(private http:HttpClient){}
    public _url="http://localhost:3000/products";
    // public productDetails:IProductDetails[]=[
    //     {product_id:1,title:"Apple iPhone 11 Pro Max", price:10, stock:10},
    //     {product_id:2,title:"Apple iPhone XR", price:10, stock:22},
    //     {product_id:3,title:"Nokia 9", price:10, stock:20},
    //     {product_id:4,title:"OnePlus 7T Pro", price:10, stock:10},
    //     {product_id:5,title:"Samsung Galaxy S10e", price:10, stock:15},
    //     {product_id:6,title:"Samsung Galaxy Note10", price:10, stock:21},
    //     {product_id:7,title:"Huawei P30 Pro", price:10, stock:19},
    //     {product_id:8,title:"huawei Mate 30", price:10, stock:30},
    //     {product_id:9,title:"Mi Mix 2", price:10, stock:6},
    //     {product_id:10,title:"Nokia 8", price:10, stock:21}
    // ]; 
    getProductsdata():Observable<IProductDetails[]>{
        return this.http.get<IProductDetails[]>(this._url);
    }
    getProductdata(id):Observable<IProductDetails>{
        return this.http.get<IProductDetails>(this._url+'/'+id);
    }
    createProductdata(data):Observable<IProductDetails> {  
        return this.http.post<IProductDetails>(this._url ,{'title':data.title, 'price':data.price,'stock':data.stock}) ; 
    } 
    updateData(data):Observable<IProductDetails[]>{  
        return this.http.put<IProductDetails[]>(this._url + '/' + data.id,{'id':data.id,'title':data.title, 'price':data.price,'stock':data.stock});  
    }
    deleteProductdata(id):Observable<IProductDetails> {  
        return this.http.delete<IProductDetails>(this._url + '/' + id);  
      }
}