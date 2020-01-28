import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {IProductDetails} from 'src/app/models/users.model';
import {ProductListService} from 'src/app/services/product-list.service';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private _productListService: ProductListService,private route:Router,private router:ActivatedRoute) { }

  hiddenForm: boolean = false;
  id:number;
  title: string = "";
  price: number = 0;
  stock: number = 0;
  temp: IProductDetails;
  newProduct:IProductDetails;
  sub;
  index:number=0;
  productDetails:IProductDetails[];
  
  ngOnInit() {
    this.productDetails = this._productListService.productDetails;
    //  this.sub = this.router.queryParams.subscribe(params => {this.id=params['i']||0;});
    this.sub = this.router
    .paramMap
    .subscribe(params => {
      this.id=parseInt(params.get('id'));
    });
    if(this.id){
        this.temp=this.productDetails.find(item => item.product_id == this.id);
        this.addProductForm.setValue({title:this.temp.title,price:this.temp.price,stock:this.temp.stock});
    }
    else{
      this.addProductForm.setValue({title:'',price:0,stock:0});
    }
  }

  addProductForm = this.fb.group(
    {
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      stock: ['', [Validators.required, Validators.min(1)]]
    });

    onSubmit() {
      this.title = this.addProductForm.controls['title'].value;
      this.price = this.addProductForm.controls['price'].value;
      this.stock = this.addProductForm.controls['stock'].value;
      if (this.router.snapshot.queryParams['i']){
        let selecteditem = this.productDetails.find(item => item.product_id === this.temp.product_id);
        this.index=this.productDetails.indexOf(selecteditem);
        this.productDetails[this.index]={product_id:this.temp.product_id,title:this.title,price:this.price,stock:this.stock};
      }
      else{
        this.index=this.productDetails.length;
        this.index=this.productDetails[this.index-1].product_id;
        this.newProduct = {product_id: this.index+1, title: this.title, price: this.price, stock: this.stock}
        this.productDetails.push(this.newProduct);
      }
      this.addProductForm.reset();
      this.route.navigateByUrl('/products/productlist');
    }
  
    onReset() {
      this.addProductForm.reset();
    }

}
