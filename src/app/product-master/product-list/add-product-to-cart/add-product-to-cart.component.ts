import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { IProductDetails } from 'src/app/models/users.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-product-to-cart',
  templateUrl: './add-product-to-cart.component.html',
  styleUrls: ['./add-product-to-cart.component.scss']
})
export class AddProductToCartComponent implements OnInit {

  constructor(private _productListService: ProductListService, private router:ActivatedRoute,private _cartproduct:CartService) { }


  productDetails:IProductDetails[];
  id:number;
  temp:IProductDetails;
  cartProductArray;
  length:number

  ngOnInit() {
    this.productDetails = this._productListService.productDetails;
    this.cartProductArray=this._cartproduct.cartProduct;
    this.length=this.cartProductArray.length;
    console.log(this.cartProductArray);
  }
  deleteFromCart(id){
    this.temp=this.cartProductArray.find(item=>item.product_id==id);
    this.cartProductArray.splice(this.cartProductArray.indexOf(this.temp),1);
  }

}
